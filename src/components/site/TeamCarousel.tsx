import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type TeamMember = {
  name: string;
  role: string;
  quote: string;
  photo: string;
  photoPosition?: string;
  photoSize?: string;
};

const SLIDE_MS = 700;
const AUTOPLAY_MS = 4500;
const TILT_DEG = 28;

const GLOW_SHADOW =
  "0 0 0 1px rgba(255,255,255,0.4), 0 20px 46px rgba(0,0,0,0.45), 0 0 60px rgba(243,115,56,0.18)";
const FLAT_SHADOW = "0 6px 18px rgba(0,0,0,0.35)";

function useResponsivePerView(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      setPerView(w >= 560 ? 3 : 1);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [containerRef]);
  return perView;
}

export function TeamCarousel({ members }: { members: TeamMember[] }) {
  const trackWrapRef = useRef<HTMLDivElement>(null);
  const perView = useResponsivePerView(trackWrapRef);
  const n = members.length;

  const [pos, setPos] = useState(n - 1);
  const [animate, setAnimate] = useState(true);
  const lockedRef = useRef(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const posRef = useRef(pos);
  posRef.current = pos;
  const [paused, setPaused] = useState(false);

  // keep pos valid whenever perView (and thus the loop math) changes
  useEffect(() => {
    setPos(n - 1);
  }, [perView, n]);

  useEffect(() => {
    if (paused) return;
    autoplayTimer.current = setInterval(() => step(1), AUTOPLAY_MS);
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, perView, n]);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  function snap(nextPos: number, cb?: () => void) {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    lockedRef.current = true;
    setAnimate(false);
    setPos(nextPos);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lockedRef.current = false;
        setAnimate(true);
        cb?.();
      });
    });
  }

  function step(dir: 1 | -1) {
    if (lockedRef.current) return;
    const p0 = posRef.current;
    const move = (from: number) => {
      const t = from + dir;
      if (t < 0) {
        snap(from + n, () => setPos(from + n - 1));
        return;
      }
      setPos(t);
      if (t >= n) {
        if (resetTimer.current) clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => snap(t - n), SLIDE_MS + 20);
      }
    };
    if (p0 >= n) snap(p0 - n, () => move(p0 - n));
    else move(p0);
  }

  function goTo(centerIdx: number) {
    if (lockedRef.current) return;
    if (resetTimer.current) clearTimeout(resetTimer.current);
    const target = (centerIdx - 1 + n) % n;
    if (posRef.current >= n) snap(posRef.current - n, () => setPos(target));
    else setPos(target);
  }

  const centerSlot = pos + 1;
  const center = ((centerSlot % n) + n) % n;

  const slots = [];
  for (let k = 0; k < n + perView; k++) {
    const m = members[k % n]!;
    const off = k - centerSlot;
    const isCenter = off === 0;
    const side = off < 0 ? 1 : -1;
    slots.push({
      key: `${k}-${m.name}`,
      member: m,
      transform: isCenter
        ? "translateZ(70px) scale(1.05)"
        : `rotateY(${side * TILT_DEG}deg) translateZ(-60px) scale(0.9)`,
      opacity: isCenter ? 1 : 0.55,
      filter: isCenter ? "none" : "blur(2px) saturate(0.85)",
      shadow: isCenter ? GLOW_SHADOW : FLAT_SHADOW,
      z: isCenter ? 3 : 1,
    });
  }

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          aria-label="Previous team member"
          onClick={() => step(-1)}
          className="glass-pill cursor-hover-target flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div
          ref={trackWrapRef}
          className="min-w-0 flex-1 overflow-hidden py-8"
          style={{ perspective: 1400 }}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(-${pos * (100 / perView)}%)`,
              transition: animate
                ? `transform ${SLIDE_MS}ms cubic-bezier(0.22,0.61,0.36,1)`
                : "none",
            }}
          >
            {slots.map(({ key, member, transform, opacity, filter, shadow, z }) => (
              <article
                key={key}
                className="box-border shrink-0 px-2.5 sm:px-3.5"
                style={{ flex: `0 0 ${100 / perView}%` }}
              >
                <div
                  style={{
                    transform,
                    opacity,
                    filter,
                    zIndex: z,
                    transitionProperty: "transform, opacity, filter",
                  }}
                  className="relative duration-700 ease-out"
                >
                  <div
                    className="glass-pill relative overflow-hidden rounded-[22px] text-foreground"
                    style={{ boxShadow: shadow, transition: "box-shadow 700ms ease" }}
                  >
                    <div className="p-4 pb-0 sm:p-5 sm:pb-0">
                      <div
                        className="aspect-4/5 w-full rounded-[14px] bg-muted bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${member.photo})`,
                          backgroundPosition: member.photoPosition ?? "50% 12%",
                          backgroundSize: member.photoSize ?? "cover",
                        }}
                      />
                    </div>
                    <div className="p-6 pt-5 text-center sm:p-7 sm:pt-6">
                      <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                        {member.name}
                      </h3>
                      <div className="mx-auto my-3 h-px w-8 bg-foreground/15" />
                      <p className="text-sm font-bold uppercase tracking-[0.15em] text-foreground sm:text-base">
                        {member.role}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-foreground">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next team member"
          onClick={() => step(1)}
          className="glass-pill cursor-hover-target flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2.5">
        {members.map((m, idx) => (
          <button
            key={m.name}
            type="button"
            aria-label={`Show ${m.name}`}
            onClick={() => goTo(idx)}
            className="cursor-hover-target p-1"
          >
            <span
              className="block size-2 rounded-full transition-colors duration-200"
              style={{
                backgroundColor:
                  idx === center ? "var(--color-accent)" : "var(--color-background)",
                opacity: idx === center ? 1 : 0.35,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
