import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logoMark from "../../assets/logo-mark.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 pt-6 sm:px-8">
        <Link
          to="/"
          aria-label="BlendSkills — Home"
          className="glass-pill pointer-events-auto flex items-center rounded-full p-3"
        >
          <img src={logoMark} alt="BlendSkills" className="h-11 w-auto brightness-0" />
        </Link>

        <nav className="glass-pill pointer-events-auto hidden items-center gap-1 rounded-full p-1.5 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-muted" }}
              className="rounded-full px-4 py-2 text-sm text-foreground/85 transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27d%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark ml-1 rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-85"
          >
            Get started
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="glass-pill pointer-events-auto rounded-full p-3 md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="glass-pill pointer-events-auto mx-5 mt-3 animate-rise rounded-[24px] p-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919175789966"
            className="glass-dark mt-1 block rounded-[16px] px-4 py-3 text-base font-medium"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
