import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    window.__lenis = lenis;

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Sections further down the page (e.g. Reveal's scroll-triggered fade-ins)
    // have their trigger position calculated relative to the document height
    // at the moment they mount. Any component below them that measures its own
    // size asynchronously (ResizeObserver-driven carousels, images without
    // reserved aspect-ratio, etc.) can shift that height afterward, leaving
    // earlier ScrollTriggers pointing at stale positions — sections then only
    // reveal once you've scrolled much further than expected. Refresh
    // ScrollTrigger whenever the document's height actually changes so every
    // trigger stays in sync with the real layout, no matter which component
    // caused the shift.
    let resizeRaf = 0;
    const refresh = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const ro = new ResizeObserver(refresh);
    ro.observe(document.body);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ro.disconnect();
      cancelAnimationFrame(resizeRaf);
      gsap.ticker.remove(update);
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
