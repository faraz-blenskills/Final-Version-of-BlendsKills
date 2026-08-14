import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

export type ImmersiveServiceItem = {
  num: string;
  title: string;
  desc: string;
  provide: string;
  capabilities: string[];
  img: string;
  video?: string;
  modalBg: string;
};

function lerp(a: number, b: number, f: number) {
  return a + (b - a) * f;
}
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

const BREAKPOINTS = [
  { d: 0, tx: 0, scale: 1, ty: 0, blur: 0 },
  { d: 1, tx: 1, scale: 0.86, ty: 0.05, blur: 3 },
  { d: 2, tx: 1, scale: 0.73, ty: 0.09, blur: 6 },
  { d: 3, tx: 1, scale: 0.61, ty: 0.12, blur: 8 },
];

function paramsAt(dist: number) {
  const dd = Math.min(dist, 3);
  const i = Math.floor(dd);
  const frac = dd - i;
  const a = BREAKPOINTS[i]!;
  const b = BREAKPOINTS[Math.min(i + 1, 3)]!;
  return {
    tx: lerp(a.tx, b.tx, frac),
    scale: lerp(a.scale, b.scale, frac),
    ty: lerp(a.ty, b.ty, frac),
    blur: lerp(a.blur, b.blur, frac),
  };
}

const whatsappLink = (service: string) =>
  `https://wa.me/919175789966?text=Hi%20BlendSkills,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(
    service,
  )}%20services.`;

const AUTOPLAY_MS = 4200;

export function ImmersiveServiceCarousel({ items }: { items: ImmersiveServiceItem[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const [width, setWidth] = useState(1000);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const N = items.length;

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      if (!cr) return;
      setWidth(Math.max(1, cr.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [openIndex]);

  useEffect(() => {
    if (isPaused || openIndex !== null) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % N);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, openIndex, N]);

  const goTo = (i: number) => setActiveIndex(((i % N) + N) % N);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(activeIndex - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(activeIndex + 1);
    }
  };

  const cardW = clamp(width * 0.32, 260, 380);
  const cardH = cardW * 1.5;
  const offset = cardW * 0.62;

  const openItem = openIndex !== null ? items[openIndex] : null;

  return (
    <div className="relative flex flex-col bg-background">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-2 pt-28 sm:px-8 sm:pt-32">
        <p className="eyebrow">Our Services</p>
        <h1 className="display-xl mt-3 max-w-2xl">What We Do</h1>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-start gap-8 px-5 sm:px-8">
        <div className="hidden w-[320px] shrink-0 pt-4 lg:block">
          <p className="text-xl leading-relaxed text-foreground/80">
            From performance marketing to AI automation, we design and build the systems growing
            brands run on. Explore each service to see how we can help.
          </p>
          <div className="mt-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every engagement starts with a conversation about your goals, not a fixed package.
              Pick a service to see exactly what's included.
            </p>
          </div>
        </div>

        <div
          ref={stageRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative h-[66vh] min-h-[500px] max-h-[780px] flex-1 outline-none"
        >
          {items.map((item, i) => {
            let raw = (i - activeIndex) % N;
            if (raw > N / 2) raw -= N;
            if (raw < -N / 2) raw += N;
            const dist = Math.abs(raw);
            const dir = raw === 0 ? 0 : raw > 0 ? 1 : -1;
            const p = paramsAt(dist);
            const tx = p.tx * offset * dir;
            const ty = p.ty * cardH;
            const isActive = i === activeIndex;

            return (
              <div
                key={item.title}
                role="button"
                aria-label={isActive ? `View ${item.title} details` : `Show ${item.title}`}
                tabIndex={0}
                onClick={() => (isActive ? setOpenIndex(i) : goTo(i))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (isActive) setOpenIndex(i);
                    else goTo(i);
                  }
                }}
                className="cursor-hover-target absolute left-1/2 top-1/2 border-0 bg-transparent p-0 text-left"
                style={{
                  width: cardW,
                  height: cardH,
                  marginLeft: -cardW / 2,
                  marginTop: -cardH / 2,
                  transform: `translate3d(${tx}px, ${ty}px, 0) scale(${p.scale})`,
                  filter: `blur(${p.blur}px)`,
                  zIndex: Math.round(100 - dist),
                  cursor: "pointer",
                  willChange: "transform, filter",
                  backfaceVisibility: "hidden",
                  transition: "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease",
                }}
              >
                <div
                  className={`group flex size-full flex-col overflow-hidden rounded-[28px] border border-border bg-surface shadow-[var(--shadow-feature)] transition-[transform,box-shadow] duration-300 ${
                    isActive ? "hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)]" : ""
                  }`}
                >
                  <div
                    className="relative h-[58%] w-full shrink-0 overflow-hidden bg-muted"
                    onMouseEnter={() => {
                      const v = videoRefs.current.get(i);
                      if (v) void v.play();
                    }}
                    onMouseLeave={() => {
                      const v = videoRefs.current.get(i);
                      if (v) {
                        v.pause();
                        v.currentTime = 0;
                      }
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className={
                        item.video
                          ? "size-full object-cover group-hover:invisible"
                          : "size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      }
                      draggable={false}
                    />
                    {item.video && (
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current.set(i, el);
                          else videoRefs.current.delete(i);
                        }}
                        src={item.video}
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="invisible absolute inset-0 size-full object-cover group-hover:visible"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-foreground/50 to-transparent" />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-4">
                    <h3 className="font-display text-base font-medium leading-tight tracking-tight text-foreground sm:text-lg">
                      {item.title}
                    </h3>
                    {isActive && (
                      <>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {item.desc}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenIndex(i);
                          }}
                          className="cursor-hover-target mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:gap-2.5 hover:opacity-90"
                        >
                          View more
                          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center justify-center gap-6 px-5 pb-16 pt-8 sm:px-8">
        <button
          type="button"
          aria-label="Previous service"
          onClick={() => goTo(activeIndex - 1)}
          className="cursor-hover-target flex size-11 items-center justify-center rounded-full border border-foreground/20 bg-surface transition-colors hover:bg-muted"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => goTo(i)}
              className="cursor-hover-target p-1"
            >
              <span
                className="block h-[7px] rounded-full transition-[width,background-color] duration-200"
                style={{
                  width: i === activeIndex ? 26 : 8,
                  backgroundColor:
                    i === activeIndex ? "var(--color-accent)" : "var(--color-border)",
                }}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next service"
          onClick={() => goTo(activeIndex + 1)}
          className="cursor-hover-target flex size-11 items-center justify-center rounded-full border border-foreground/20 bg-surface transition-colors hover:bg-muted"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {openItem && (
        <div
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-foreground/60 p-3 backdrop-blur-sm sm:p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="no-scrollbar relative max-h-[94vh] w-[80vw] max-w-4xl overflow-y-auto overscroll-contain rounded-[40px] shadow-[var(--shadow-feature)]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[40px] bg-surface">
              {openItem.video ? (
                <video
                  key={openItem.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={openItem.modalBg}
                  className="absolute inset-0 size-full scale-125 object-cover blur-2xl"
                >
                  <source src={openItem.video} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="absolute inset-0 scale-125 bg-cover bg-center blur-2xl"
                  style={{ backgroundImage: `url(${openItem.modalBg})` }}
                />
              )}
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="cursor-hover-target absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full border border-foreground/15 bg-surface transition-colors hover:bg-muted"
            >
              <X className="size-4" />
            </button>

            <div className="relative flex flex-col gap-5 p-8 pt-20 text-foreground sm:p-14 sm:pt-16">
              <h3 className="display-xl">{openItem.title}</h3>
              <p className="text-lg leading-relaxed text-foreground">{openItem.provide}</p>
              <div className="flex flex-wrap gap-2">
                {openItem.capabilities.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-foreground/15 bg-muted px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <a
                href={whatsappLink(openItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Get a Free Consultation
                <ArrowUpRight className="size-4" />
              </a>
              <p className="text-xs text-foreground">Terms and conditions apply.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
