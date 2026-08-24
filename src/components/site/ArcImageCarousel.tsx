import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

export type ArcCarouselItem = {
  title: string;
  logo: string;
};

const FOCAL = -90;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
function wrapDeg(a: number) {
  let r = a % 360;
  if (r < -180) r += 360;
  if (r > 180) r -= 360;
  return r;
}
function angDist(a: number, b: number) {
  return Math.abs(wrapDeg(a - b));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
function emph(dist: number, max: number) {
  const t = clamp(dist / max, 0, 1);
  return 1 - easeOutCubic(t);
}
function pickArcParams(width: number) {
  if (width <= 480) return { spanDeg: 120, radiusFactor: 0.62 };
  if (width <= 768) return { spanDeg: 150, radiusFactor: 0.56 };
  return { spanDeg: 175, radiusFactor: 0.5 };
}
function cardBaseWidth(width: number) {
  if (width <= 480) return clamp(width * 0.4, 140, 210);
  if (width <= 768) return clamp(width * 0.28, 160, 220);
  return clamp(width * 0.22, 170, 260);
}
function getActiveIndex(rot: number, angles: number[], focal: number) {
  let best = 0;
  let bestD = Infinity;
  for (let i = 0; i < angles.length; i++) {
    const d = angDist((angles[i] ?? 0) + rot, focal);
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  }
  return best;
}
function rotationToBringIndexToFocal(i: number, angles: number[], focal: number) {
  return focal - (angles[i] ?? 0);
}

export function ArcImageCarousel({
  items,
  title,
  subtitle,
}: {
  items: ArcCarouselItem[];
  title: string;
  subtitle: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(Math.min(4, items.length - 1));
  const [size, setSize] = useState({ width: 900, height: 620 });
  const [dragging, setDragging] = useState(false);

  const rafRef = useRef<number | null>(null);
  const velRef = useRef(0);
  const rotationRef = useRef(0);
  const draggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const startRotRef = useRef(0);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  const arcParams = useCallback(() => pickArcParams(size.width), [size.width]);
  const baseAngles = useCallback(() => {
    const { spanDeg } = arcParams();
    const mid = (items.length - 1) / 2;
    const step = items.length > 1 ? spanDeg / (items.length - 1) : 0;
    return items.map((_, i) => FOCAL + (i - mid) * step);
  }, [arcParams, items]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      if (!cr) return;
      setSize({ width: Math.max(1, cr.width), height: Math.max(1, cr.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const angles = baseAngles();
    const initial = rotationToBringIndexToFocal(activeIndex, angles, FOCAL);
    rotationRef.current = initial;
    setRotation(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateActiveFromRotation = useCallback(
    (rot: number) => {
      const idx = getActiveIndex(rot, baseAngles(), FOCAL);
      setActiveIndex((prev) => (prev === idx ? prev : idx));
    },
    [baseAngles],
  );

  const stopSpring = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const startSpring = useCallback(
    (target: number) => {
      stopSpring();
      let pos = rotationRef.current;
      let vel = velRef.current;
      let last: number | null = null;
      const stiffness = 260;
      const damping = 28;
      const mass = 1;
      const step = (t: number) => {
        if (last == null) last = t;
        const dt = Math.min(0.032, (t - last) / 1000) || 0.016;
        last = t;
        const F = -stiffness * (pos - target) - damping * vel;
        vel += (F / mass) * dt;
        pos += vel * dt;
        if (Math.abs(pos - target) < 0.05 && Math.abs(vel) < 0.05) {
          velRef.current = 0;
          rafRef.current = null;
          rotationRef.current = target;
          setRotation(target);
          updateActiveFromRotation(target);
          return;
        }
        velRef.current = vel;
        rotationRef.current = pos;
        setRotation(pos);
        updateActiveFromRotation(pos);
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [stopSpring, updateActiveFromRotation],
  );

  const goToIndex = useCallback(
    (i: number) => {
      const angles = baseAngles();
      startSpring(rotationToBringIndexToFocal(clamp(i, 0, items.length - 1), angles, FOCAL));
    },
    [baseAngles, items.length, startSpring],
  );

  const snapToNearest = useCallback(() => {
    const angles = baseAngles();
    const idx = getActiveIndex(rotationRef.current, angles, FOCAL);
    startSpring(rotationToBringIndexToFocal(idx, angles, FOCAL));
  }, [baseAngles, startSpring]);

  useEffect(
    () => () => {
      stopSpring();
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    },
    [stopSpring],
  );

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    stopSpring();
    draggingRef.current = true;
    pointerIdRef.current = e.pointerId;
    startXRef.current = e.clientX;
    startRotRef.current = rotationRef.current;
    velRef.current = 0;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    setDragging(true);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || e.pointerId !== pointerIdRef.current) return;
    const dx = e.clientX - startXRef.current;
    const next = startRotRef.current + dx * 0.28;
    rotationRef.current = next;
    setRotation(next);
    updateActiveFromRotation(next);
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      if (pointerIdRef.current != null) e.currentTarget.releasePointerCapture(pointerIdRef.current);
    } catch {
      /* noop */
    }
    setDragging(false);
    snapToNearest();
  };
  // React attaches its synthetic wheel listener as passive, so preventDefault()
  // inside a JSX onWheel prop is silently ignored (and throws in dev). Attach a
  // real, non-passive listener instead so the page doesn't scroll while dragging
  // the arc with the mouse wheel.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const handleWheel = (e: globalThis.WheelEvent) => {
      e.preventDefault();
      stopSpring();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const next = rotationRef.current + delta * 0.06;
      rotationRef.current = next;
      setRotation(next);
      updateActiveFromRotation(next);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => snapToNearest(), 140);
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [stopSpring, snapToNearest, updateActiveFromRotation]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      goToIndex(activeIndex + (e.key === "ArrowLeft" ? -1 : 1));
    }
  };

  const { radiusFactor } = arcParams();
  const angles = baseAngles();
  const radius = clamp(size.width * radiusFactor, 220, 720);
  const cx = size.width / 2;
  const centerY = 140 + radius;
  const cardW = clamp(cardBaseWidth(size.width), 120, 380);
  const cardH = cardW;

  const cards = items.map((item, i) => {
    const angle = angles[i] ?? 0;
    const theta = (Math.PI / 180) * (angle + rotation);
    const x = cx + radius * Math.cos(theta) - cardW / 2;
    const y = centerY + radius * Math.sin(theta) - cardH / 2;
    const dist = angDist(angle + rotation, FOCAL);
    const scale = lerp(0.86, 1.15, emph(dist, 60));
    const opacity = lerp(0.7, 1, emph(dist, 90));
    const lift = -14 * emph(dist, 55);
    const z = Math.round(10 + emph(dist, 80) * 1000);
    const rotateZ = angle + rotation + 90;
    return { item, i, x, y, lift, scale, opacity, z, rotateZ };
  });

  const topOfArc = centerY - radius;
  const bottomOfArc = centerY + radius;
  const safe = Math.min(bottomOfArc - cardH * 0.35, size.height * 0.62);
  const contentTop = Math.max(topOfArc + radius * 0.58, safe) - 40;

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onLostPointerCapture={onPointerUp}
      onKeyDown={onKeyDown}
      className={`relative mx-auto min-h-[520px] w-full max-w-[1100px] overflow-hidden rounded-[40px] bg-paper outline-none sm:aspect-[900/620] sm:min-h-0 ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(900px 500px at 50% 0%, rgba(20,20,19,0.06), rgba(20,20,19,0) 60%)",
        }}
      />

      <div className="absolute inset-0">
        {cards.map(({ item, i, x, y, lift, scale, opacity, z, rotateZ }) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Select ${item.title}`}
            onClick={() => goToIndex(i)}
            onPointerDown={(e) => e.stopPropagation()}
            className="cursor-hover-target absolute border-0 bg-transparent p-0"
            style={{
              left: x,
              top: y + lift,
              width: cardW,
              height: cardH,
              zIndex: z,
              transform: `scale(${scale}) rotate(${rotateZ}deg)`,
              opacity,
              transformOrigin: "50% 50%",
            }}
          >
            <div
              className="flex size-full items-center justify-center overflow-hidden rounded-[28px] bg-white shadow-[var(--shadow-card)]"
              style={{ padding: cardW * 0.14 }}
            >
              <img
                src={item.logo}
                alt={item.title}
                draggable={false}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </button>
        ))}
      </div>

      <div className="absolute inset-x-0 flex flex-col items-center gap-4 px-6" style={{ top: contentTop }}>
        <h2 className="display-lg w-full max-w-lg text-center">{title}</h2>
        <p className="max-w-md text-center text-base leading-relaxed text-paper-muted">{subtitle}</p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center gap-2">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="h-[7px] rounded-full transition-[width,background-color] duration-200"
            style={{
              width: i === activeIndex ? 22 : 7,
              backgroundColor: i === activeIndex ? "var(--color-accent)" : "var(--color-border)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
