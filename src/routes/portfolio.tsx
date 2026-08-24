import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "../components/site/Reveal";
import hypevaultShot from "../assets/portfolio/screenshots/hypevault.jpg";
import amtplShot from "../assets/portfolio/screenshots/amtpl.jpg";
import unikBiotechShot from "../assets/portfolio/screenshots/unik-biotech.jpg";
import vineeRobotShot from "../assets/portfolio/screenshots/vinee-robot.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio: Websites & Apps We've Built | BlendSkills" },
      {
        name: "description",
        content:
          "A showcase of websites and apps BlendSkills has built for brands across Pune, Gaya, and beyond.",
      },
      { property: "og:title", content: "Portfolio | BlendSkills" },
      {
        property: "og:description",
        content: "A showcase of websites and apps BlendSkills has built for growing brands.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

type PortfolioItem = {
  title: string;
  description: string;
  screenshot?: string;
  imagePosition?: string;
  url?: string;
};

const whatsappHref = (project: string) =>
  `https://wa.me/919175789966?text=${encodeURIComponent(`Hi BlendSkills! I'd like to book a demo of ${project}.`)}`;

const projects: PortfolioItem[] = [
  {
    title: "HypeVault",
    description:
      "Authentic sneakers & pre-owned luxury resale marketplace for Gen Z. A fast, mobile-first storefront built to browse, list, and buy verified pieces with confidence.",
    screenshot: hypevaultShot,
    url: "https://aa-one-silk.vercel.app/",
  },
  {
    title: "Vinee Robot",
    description:
      "Easy robot kits built with construction bricks, made for kids. A conversion-focused product site showcasing the full kit lineup on a modern e-commerce foundation.",
    screenshot: vineeRobotShot,
    imagePosition: "object-[center_8%]",
    url: "https://vineerobot.com/",
  },
  {
    title: "WorkPilot",
    description:
      "An all-in-one project management, time & attendance, leave and team-chat platform, built end-to-end and fully owned, not stitched together from rented SaaS seats. Kanban boards, live timesheets, automatic attendance reminders, leave approvals and role-based access, all from one login.",
  },
  {
    title: "Ahire Machine Tools (AMTPL)",
    description:
      "Drilling machines, vices, and industrial machine tools manufacturer. A corporate site presenting their certified product catalog and manufacturing capabilities to B2B buyers.",
    screenshot: amtplShot,
    url: "https://amtplindia.com/",
  },
  {
    title: "Unik Biotech Research",
    description:
      "Science-driven agri-inputs and soil enhancement solutions. A brand site detailing their research-backed product range for growers and distributors.",
    screenshot: unikBiotechShot,
    url: "https://unik-biotech-alpha.vercel.app/",
  },
];

function PortfolioPage() {
  return (
    <>
      <section
        data-cursor-zone="dark"
        className="relative overflow-hidden bg-foreground text-background"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="animate-glow-drift absolute -right-[10%] -top-[20%] size-[55vw] max-w-[700px] rounded-full blur-[110px]"
            style={{
              background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            }}
          />
          <div
            className="animate-glow-drift absolute -bottom-[25%] left-[5%] size-[50vw] max-w-[620px] rounded-full blur-[110px]"
            style={{
              background: "radial-gradient(circle, rgba(243,240,238,0.5) 0%, transparent 70%)",
              animationDelay: "-5s",
            }}
          />
          <div
            className="animate-glow-drift-fast absolute left-[35%] top-[10%] size-[30vw] max-w-[420px] rounded-full blur-[100px]"
            style={{
              background: "radial-gradient(circle, rgba(56,96,190,0.45) 0%, transparent 70%)",
              animationDelay: "-2s",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
          <Reveal>
            <p className="eyebrow text-background/70">
              <Link to="/" className="hover:text-background">
                Home
              </Link>{" "}
              / Portfolio
            </p>
            <h1 className="display-xl mt-6 max-w-2xl text-background">
              Websites & Apps <span className="animate-shimmer-text">We've Built</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
              A look at the brands we've partnered with, from corporate websites and booking systems
              to full product builds. Each one started the same way every project does: a
              conversation about the goal, not just the deliverable.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="eyebrow mt-14 text-background/60">Our Clients' Projects</p>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => {
              const media = p.screenshot ? (
                <div className="aspect-video w-full shrink-0 overflow-hidden bg-muted">
                  <img
                    src={p.screenshot}
                    alt={p.title}
                    className={`size-full object-cover ${p.imagePosition ?? "object-top"} transition-transform duration-500 ease-out group-hover:scale-105`}
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full shrink-0 items-center justify-center bg-foreground">
                  {p.url ? (
                    <Globe className="size-8 text-background/40" />
                  ) : (
                    <span className="animate-shimmer-text font-display text-xl font-medium">
                      {p.title}
                    </span>
                  )}
                </div>
              );

              const footer = (
                <div className="flex flex-1 flex-col gap-1.5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-medium text-foreground">{p.title}</h3>
                    {p.url ? (
                      <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    ) : (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                        <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                        Available
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{p.description}</p>
                  {!p.url && (
                    <div className="mt-2 flex gap-2">
                      <a
                        href={whatsappHref(p.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-hover-target inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-medium text-background transition-opacity hover:opacity-85"
                      >
                        <MessageCircle className="size-3.5" /> WhatsApp
                      </a>
                      <a
                        href="tel:+919175789966"
                        className="cursor-hover-target inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        <Phone className="size-3.5" /> Call
                      </a>
                    </div>
                  )}
                </div>
              );

              const cardClassName =
                "card-shine card-tilt-hover cursor-hover-target group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-surface shadow-[var(--shadow-feature)]";

              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClassName}
                    >
                      {media}
                      {footer}
                    </a>
                  ) : (
                    <div className={cardClassName}>
                      {media}
                      {footer}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-background/10 bg-foreground text-background">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-24 sm:px-8">
          <Reveal>
            <h2 className="display-lg max-w-xl">Want your site on this page next?</h2>
            <p className="mt-4 max-w-lg text-base text-background/70">
              Tell us what you're building and we'll show you how we'd approach it.
            </p>
            <a
              href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27d%20like%20to%20discuss%20a%20website%20or%20app%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Get a Free Consultation
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
