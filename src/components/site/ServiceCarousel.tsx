import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type CarouselService = {
  n: string;
  title: string;
  meta: string;
  img: string;
};

export function ServiceCarousel({ items }: { items: CarouselService[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 320) + 24;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft };
    setIsDragging(true);
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    track.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.active = false;
    setIsDragging(false);
  };

  return (
    <div>
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {items.map((s) => (
          <article
            key={s.n}
            data-card
            className="card-paper cursor-hover-target w-[78vw] shrink-0 snap-start overflow-hidden sm:w-[380px]"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                draggable={false}
                className="size-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-display text-xs text-paper-foreground/70">
                {s.n}
              </span>
            </div>
            <div className="p-7">
              <p className="eyebrow text-accent">{s.meta}</p>
              <h3 className="mt-3 text-2xl font-medium text-paper-foreground">{s.title}</h3>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper-foreground/80 transition-colors hover:text-accent"
              >
                Explore service <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Previous service"
          onClick={() => scrollByCard(-1)}
          className="cursor-hover-target flex size-11 items-center justify-center rounded-full border border-paper-foreground/15 text-paper-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next service"
          onClick={() => scrollByCard(1)}
          className="cursor-hover-target flex size-11 items-center justify-center rounded-full border border-paper-foreground/15 text-paper-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
