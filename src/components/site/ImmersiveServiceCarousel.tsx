import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

export type ImmersiveServiceItem = {
  num: string;
  title: string;
  desc: string;
  img: string;
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

export function ImmersiveServiceCarousel({ items }: { items: ImmersiveServiceItem[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1000);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const cardW = clamp(width * 0.26, 220, 320);
  const cardH = cardW * 1.5;
  const offset = cardW * 0.62;

  const openItem = openIndex !== null ? items[openIndex] : null;

  return (
    <div className="relative flex flex-col bg-background">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-6 pt-28 sm:px-8 sm:pt-32">
        <p className="eyebrow">Our Services</p>
        <h1 className="display-xl mt-6 max-w-2xl">What We Do</h1>
      </div>

      <div
        ref={stageRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative h-[62vh] min-h-[460px] max-h-[720px] w-full outline-none"
      >
        {items.map((item, i) => {
          const raw = i - activeIndex;
          const dist = Math.abs(raw);
          const dir = raw === 0 ? 0 : raw > 0 ? 1 : -1;
          const p = paramsAt(dist);
          const tx = p.tx * offset * dir;
          const ty = p.ty * cardH;
          const isActive = i === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={isActive ? undefined : `Show ${item.title}`}
              tabIndex={isActive ? -1 : 0}
              onClick={() => !isActive && goTo(i)}
              className="cursor-hover-target absolute left-1/2 top-1/2 border-0 bg-transparent p-0 text-left"
              style={{
                width: cardW,
                height: cardH,
                marginLeft: -cardW / 2,
                marginTop: -cardH / 2,
                transform: `translate(${tx}px, ${ty}px) scale(${p.scale})`,
                filter: `blur(${p.blur}px)`,
                zIndex: Math.round(100 - dist),
                cursor: isActive ? "default" : "pointer",
                transition: "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease",
              }}
            >
              <div className="flex size-full flex-col overflow-hidden rounded-[28px] border border-border bg-surface shadow-[var(--shadow-feature)]">
                <div className="relative h-[58%] w-full shrink-0 overflow-hidden bg-muted">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="size-full object-cover"
                    draggable={false}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-foreground/80 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-background">
                    {item.num}
                  </span>
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
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenIndex(i);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenIndex(i);
                          }
                        }}
                        className="cursor-hover-target mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-85"
                      >
                        View more
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </>
                  )}
                </div>
              </div>
            </button>
          );
        })}
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
                  backgroundColor: i === activeIndex ? "var(--color-accent)" : "var(--color-border)",
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
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-foreground/60 p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[88vh] w-full max-w-3xl flex-col gap-7 overflow-y-auto rounded-[40px] bg-surface p-8 text-foreground shadow-[var(--shadow-feature)] sm:p-14"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="cursor-hover-target absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full border border-foreground/15 bg-surface transition-colors hover:bg-muted"
            >
              <X className="size-4" />
            </button>
            <div className="h-56 w-full shrink-0 overflow-hidden rounded-[28px] sm:h-72">
              <img src={openItem.img} alt={openItem.title} className="size-full object-cover" />
            </div>
            <h3 className="display-xl max-w-xl">{openItem.title}</h3>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {openItem.desc}
            </p>
            <a
              href={whatsappLink(openItem.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start"
            >
              Get a Free Consultation
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
