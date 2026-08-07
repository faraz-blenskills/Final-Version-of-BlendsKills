import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import aboutImg from "../assets/about.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Performance Marketing, Web & AI | BlendSkills" },
      {
        name: "description",
        content:
          "Digital solutions that drive real results: performance marketing, website & app development, branding, AI automation, SEO, social media and video production.",
      },
      { property: "og:title", content: "Our Services — BlendSkills" },
      {
        property: "og:description",
        content:
          "Digital solutions that drive real results — performance marketing, development, branding, AI automation, SEO and content.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const wa = (service: string) =>
  `https://wa.me/919175789966?text=Hi%20BlendSkills,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(
    service,
  )}%20services.`;

const services = [
  {
    n: "01.",
    title: "Performance Marketing",
    lines: [
      "Drive measurable growth with data-driven Meta & Google Ads campaigns.",
      "Maximize ROI, leads, and conversions through continuous optimization.",
    ],
    img: service1,
  },
  {
    n: "02.",
    title: "Website & App Development",
    lines: [
      "Build fast, secure, and scalable digital experiences.",
      "Custom websites and applications tailored to your business goals.",
    ],
    img: service2,
  },
  {
    n: "03.",
    title: "Branding & Creative Design",
    lines: [
      "Create a memorable brand that stands out in the market.",
      "From identity to visuals, we craft designs that leave an impact.",
    ],
    img: aboutImg,
  },
  {
    n: "04.",
    title: "AI & Business Automation",
    lines: [
      "Automate workflows and simplify daily business operations.",
      "Leverage AI-powered solutions to improve productivity and efficiency.",
    ],
    img: service1,
  },
  {
    n: "05.",
    title: "SEO & Social Media Growth",
    lines: [
      "Increase your online visibility and grow your digital presence.",
      "Reach the right audience with strategic SEO and social media marketing.",
    ],
    img: service2,
  },
  {
    n: "06.",
    title: "Video Production & Content Creation",
    lines: [
      "Produce engaging content that captures attention and drives action.",
      "From concept to final edit, we create visuals that tell your story.",
    ],
    img: aboutImg,
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-40 sm:px-8">
        <p className="eyebrow">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          / Services
        </p>
        <h1 className="display-xl mt-8 max-w-4xl">Our Services</h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Digital solutions that drive real results. We take care of your presence across every
          digital touchpoint — from campaigns and content to platforms and automation.
        </p>
      </section>

      <section className="hairline">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <p className="eyebrow py-10">Our Core Services</p>

          <ul className="divide-y divide-border border-t border-border">
            {services.map((s) => (
              <li key={s.title} className="group">
                <div className="grid items-center gap-8 py-10 lg:grid-cols-[6rem_1fr_18rem_10rem]">
                  <p className="font-display text-sm text-accent">{s.n}</p>
                  <div>
                    <h2 className="text-3xl font-medium sm:text-4xl">{s.title}</h2>
                    <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                      {s.lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </div>
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-40 w-full rounded-[32px] object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <a
                    href={wa(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm font-medium lg:justify-self-end"
                  >
                    Get a Free Consultation
                    <ArrowUpRight className="size-4 text-accent" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <div className="card-soft flex flex-col gap-8 p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div>
            <h2 className="display-lg max-w-2xl">Transform Your Business with BlendSkills!</h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Need a custom solution? Let's create a strategy tailored for your business.
            </p>
          </div>
          <a
            href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27m%20interested%20in%20your%20services.%20I%27d%20like%20to%20discuss%20my%20project.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Get a Free Strategy Call <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
