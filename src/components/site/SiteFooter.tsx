import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import logoMark from "../../assets/logo-mark.png";

const services = [
  "Performance Marketing",
  "Website & App Development",
  "Branding & Creative Design",
  "AI & Business Automation",
  "SEO & Social Media Growth",
  "Video Production & Content Creation",
];

export function SiteFooter() {
  return (
    <footer data-cursor-zone="dark" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-16 sm:px-8 sm:pb-32">
        <h2 className="display-lg max-w-2xl text-background">
          We're always here when you need us.
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoMark} alt="" className="h-8 w-auto" />
              <p className="font-display text-xl font-medium text-background">
                BLENDSKILLS<sup className="ml-0.5 text-[0.9em] text-accent">®</sup>
              </p>
            </div>
            <p className="mt-5 max-w-sm text-sm font-[450] text-background/70">
              Driving Digital Growth with Innovation & Strategy. Your Growth, Our Mission.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.04em] text-background/50">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li>
                <Link to="/" className="transition-colors hover:text-background">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="transition-colors hover:text-background">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-background">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="transition-colors hover:text-background">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.04em] text-background/50">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="transition-colors hover:text-background">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.04em] text-background/50">
              Contact Info
            </p>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li>
                <a
                  href="mailto:support@blendskills.co.in"
                  className="inline-flex items-center gap-2 transition-colors hover:text-background"
                >
                  <Mail className="size-4 text-accent" /> support@blendskills.co.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919175789966"
                  className="inline-flex items-center gap-2 transition-colors hover:text-background"
                >
                  <Phone className="size-4 text-accent" /> +91 9175789966
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/mQwnoi4h4ffmoqU6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-background"
                >
                  <MapPin className="size-4 text-accent" /> Pune | Gaya
                </a>
              </li>
            </ul>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.04em] text-background/50">
              Social Media
            </p>
            <div className="mt-4 flex gap-2">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/blendskills.co/",
                  label: "BlendSkills on Instagram",
                },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/919175789966",
                  label: "Chat with BlendSkills on WhatsApp",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/blendskills-pvt-ltd",
                  label: "BlendSkills on LinkedIn",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-background/20 p-2.5 text-background transition-colors hover:bg-background/10"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-background/15 pt-6 text-center text-background/50">
          <p className="text-sm">© 2026 BlendSkills | All Rights Reserved.</p>
          <Link
            to="/terms-and-conditions"
            className="cursor-hover-target inline-flex w-fit items-center rounded-full border border-background/20 px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
