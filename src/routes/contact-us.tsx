import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact BlendSkills — Digital Growth Partner in Pune | Gaya" },
      {
        name: "description",
        content:
          "Get in touch with BlendSkills for tailored digital solutions that drive results. Call +91 9175789966 or email info@blendskills.co.in.",
      },
      { property: "og:title", content: "Contact Us — BlendSkills" },
      {
        property: "og:description",
        content: "Reach out for tailored digital marketing and development solutions. Pune | Gaya.",
      },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Phone Number",
    value: "+91 9175789966",
    href: "tel:+919175789966",
    Icon: Phone,
  },
  {
    label: "Whatsapp now",
    value: "+91 9175789966",
    href: "https://wa.me/9175789966",
    Icon: MessageCircle,
  },
  {
    label: "Email Address",
    value: "info@blendskills.co.in",
    href: "mailto:info@blendskills.co.in",
    Icon: Mail,
  },
  {
    label: "Office Address",
    value: "Pune | Gaya",
    href: "https://maps.app.goo.gl/mQwnoi4h4ffmoqU6A",
    Icon: MapPin,
  },
];

function ContactPage() {
  return (
    <>
      <section className="bg-background px-4 pb-6 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div
          data-cursor-zone="dark"
          className="relative overflow-hidden rounded-[40px] text-background"
        >
          <img
            src={heroImg}
            alt="Motion-blurred professionals in a studio with warm light streaks"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="veil absolute inset-0" />
          <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
            <p className="eyebrow text-background/70">
              <Link to="/" className="hover:text-background">
                Home
              </Link>{" "}
              / Contact Us
            </p>
            <h1 className="display-xl mt-8 max-w-3xl">Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <p className="eyebrow">Reach out to us</p>
        <h2 className="display-lg mt-6 max-w-3xl">Get in Touch</h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Reach out to us for tailored digital solutions that drive results.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card-soft group flex flex-col justify-between p-8"
            >
              <Icon className="size-6 text-accent" />
              <div className="mt-14">
                <p className="eyebrow">{label}</p>
                <p className="mt-3 font-display text-xl font-medium tracking-tight">{value}</p>
              </div>
              <ArrowUpRight className="mt-6 size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>

        <div className="card-soft mt-6 flex flex-col gap-8 p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div>
            <h3 className="display-lg max-w-xl">
              Let's create a custom strategy that fits your business goals.
            </h3>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Partner with BlendSkills & take your brand to the next level.
            </p>
          </div>
          <a
            href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27d%20like%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Get a Free Consultation <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
