import { useRef, type PointerEvent as ReactPointerEvent } from "react";

export type LogoRailItem = {
  name: string;
  logo: string;
};

const DURATIONS = { a: 34, b: 40 };

function getTranslateX(el: HTMLElement) {
  const t = getComputedStyle(el).transform;
  if (!t || t === "none") return 0;
  const m = t.match(/matrix\(([^)]+)\)/);
  if (!m) return 0;
  const parts = m[1]!.split(",").map(Number);
  return parts.length >= 6 ? (parts[4] ?? 0) : 0;
}

function Row({
  items,
  direction,
  duration,
}: {
  items: LogoRailItem[];
  direction: "a" | "b";
  duration: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ live: boolean; lastX: number; x: number; halfWidth: number } | null>(
    null,
  );

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = rowRef.current;
    const setEl = setRef.current;
    if (!el || !setEl) return;
    const x = getTranslateX(el);
    el.style.animation = "none";
    el.style.transform = `translate3d(${x}px,0,0)`;
    drag.current = { live: true, lastX: e.clientX, x, halfWidth: setEl.offsetWidth + 56 };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = rowRef.current;
    if (!d?.live || !el) return;
    const dx = e.clientX - d.lastX;
    d.x += dx;
    d.lastX = e.clientX;
    el.style.transform = `translate3d(${d.x}px,0,0)`;
  };
  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = rowRef.current;
    if (!d?.live || !el) return;
    d.live = false;
    const half = d.halfWidth || 1;
    const frac = (((d.x / half) % 1) + 1) % 1;
    el.style.transform = "";
    el.style.animation = `logo-rail-${direction} ${duration}s linear infinite`;
    el.style.animationDelay = `${-frac * duration}s`;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  return (
    <div
      ref={rowRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="flex w-max cursor-grab touch-pan-y gap-14 select-none"
      style={{ animation: `logo-rail-${direction} ${duration}s linear infinite` }}
    >
      <div ref={setRef} className="flex flex-none items-center gap-14">
        {items.map((item) => (
          <img
            key={item.name}
            src={item.logo}
            alt={item.name}
            draggable={false}
            className="h-9 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11"
          />
        ))}
      </div>
      <div aria-hidden="true" className="flex flex-none items-center gap-14">
        {items.map((item) => (
          <img
            key={`${item.name}-dup`}
            src={item.logo}
            alt=""
            draggable={false}
            className="h-9 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11"
          />
        ))}
      </div>
    </div>
  );
}

export function LogoRail({ rowA, rowB }: { rowA: LogoRailItem[]; rowB: LogoRailItem[] }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex flex-col gap-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
        }}
      >
        <Row items={rowA} direction="a" duration={DURATIONS.a} />
        <Row items={rowB} direction="b" duration={DURATIONS.b} />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[14%]"
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[14%]"
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
