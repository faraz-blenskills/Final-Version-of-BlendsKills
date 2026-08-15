import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe } from "lucide-react";

import { Reveal } from "../components/site/Reveal";
import hypevaultShot from "../assets/portfolio/screenshots/hypevault.jpg";
import amtplShot from "../assets/portfolio/screenshots/amtpl.jpg";
import unikBiotechShot from "../assets/portfolio/screenshots/unik-biotech.jpg";

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
  url: string;
};

const projects: PortfolioItem[] = [
  {
    title: "HypeVault",
    description: "Authentic sneakers & pre-owned luxury resale marketplace for Gen Z.",
    screenshot: hypevaultShot,
    url: "https://aa-one-silk.vercel.app/",
  },
  {
    title: "Vinee Robot",
    description: "Easy robot kits built with construction bricks, made for kids.",
    url: "https://vineerobot.com/",
  },
  {
    title: "Ahire Machine Tools (AMTPL)",
    description: "Drilling machines, vices, and industrial machine tools manufacturer.",
    screenshot: amtplShot,
    url: "https://amtplindia.com/",
  },
  {
    title: "Unik Biotech Research",
    description: "Science-driven agri-inputs and soil enhancement solutions.",
    screenshot: unikBiotechShot,
    url: "https://unik-biotech-alpha.vercel.app/",
  },
];

function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <Reveal>
          <p className="eyebrow">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>{" "}
            / Portfolio
          </p>
          <h1 className="display-xl mt-6 max-w-2xl">Websites & Apps We've Built</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A look at the brands we've partnered with, from corporate websites and booking systems
            to full product builds. Each one started the same way every project does: a conversation
            about the goal, not just the deliverable.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover-target group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-surface shadow-[var(--shadow-feature)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)]"
              >
                {p.screenshot ? (
                  <div className="aspect-4/5 w-full shrink-0 overflow-hidden bg-muted">
                    <img
                      src={p.screenshot}
                      alt={p.title}
                      className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-4/5 w-full shrink-0 items-center justify-center bg-muted">
                    <Globe className="size-12 text-muted-foreground/40" />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background">
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
