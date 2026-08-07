import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const [, numStr, suffix = ""] = match;
    const end = parseFloat(numStr ?? "0");
    const counter = { n: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: end,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = `${Math.floor(counter.n)}${suffix}`;
        },
        onComplete: () => {
          el.textContent = value;
        },
      });
    });

    return () => ctx.revert();
  }, [value]);

  return (
    <p ref={ref} className={className}>
      0{value.replace(/^[\d.]+/, "")}
    </p>
  );
}
