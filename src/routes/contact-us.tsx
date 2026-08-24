import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Users,
} from "lucide-react";

import { Reveal } from "../components/site/Reveal";
import { CountUp } from "../components/site/CountUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import heroMotion from "../assets/contact-hero-motion.mp4";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact BlendSkills: Digital Growth Partner in Pune | Gaya" },
      {
        name: "description",
        content:
          "Get in touch with BlendSkills for tailored digital solutions that drive results. Call +91 9175789966 or email support@blendskills.co.in.",
      },
      { property: "og:title", content: "Contact Us | BlendSkills" },
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
    label: "Whatsapp Now",
    value: "+91 9175789966",
    href: "https://wa.me/9175789966",
    Icon: MessageCircle,
  },
  {
    label: "Email Address",
    value: "support@blendskills.co.in",
    href: "mailto:support@blendskills.co.in",
    Icon: Mail,
  },
  {
    label: "Branches",
    value: "Pune | Gaya",
    href: "https://maps.app.goo.gl/mQwnoi4h4ffmoqU6A",
    Icon: MapPin,
  },
];

const services = [
  "Performance Marketing",
  "Website & App Development",
  "Branding & Creative Design",
  "AI & Business Automation",
  "SEO & Social Media Growth",
  "Video Production & Content Creation",
  "Something else",
];

const faqs = [
  {
    q: "What services does BlendSkills actually cover?",
    a: "Everything a growing brand needs under one roof: performance marketing, website & app development, branding and creative design, AI & business automation, SEO and social media growth, plus video production and content creation.",
  },
  {
    q: "Do you only work with businesses in Pune and Gaya?",
    a: "Pune, Maharashtra and Gaya, Bihar are home base, but we partner with startups and growing brands across Maharashtra, Bihar, and beyond. Most of our work happens remotely regardless of where you're based.",
  },
  {
    q: "What does getting started look like?",
    a: "We follow a simple four-step process: Discovery & Consult to understand your goals, Strategy & Planning to map the approach, Execution & Optimize to build and run it, then Results & Growth as we track outcomes and refine.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Drop a message here or on WhatsApp and our team typically responds the same business day to schedule a free consultation.",
  },
  {
    q: "Do you help after the website or campaign goes live?",
    a: "Yes, ongoing technical support, maintenance, and optimization are part of how we work, so your digital presence keeps improving long after launch.",
  },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0]!,
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      "Hi BlendSkills! I'd like to get in touch.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Interested in: ${form.service}`,
      form.message ? "" : null,
      form.message || null,
    ].filter((line): line is string => line !== null);

    const url = `https://wa.me/919175789966?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="bg-background px-4 pb-6 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div
          data-cursor-zone="dark"
          className="relative overflow-hidden rounded-[40px] text-background"
        >
          <video
            src={heroMotion}
            autoPlay
            muted
            loop
            playsInline
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
            <h1 className="display-xl mt-8 max-w-3xl">Let's build something worth talking about.</h1>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-background/25 bg-background/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-medium text-background/90">
                Currently open for new projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FORM + CHANNELS ---------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            {/* Form column */}
            <Reveal className="relative">
              <p
                aria-hidden="true"
                className="watermark-text pointer-events-none absolute -left-2 -top-10 select-none text-[7rem] sm:text-[9rem]"
              >
                Hi
              </p>

              <div className="glass-pill relative rounded-[40px] p-8 sm:p-10 lg:p-12">
                <p className="eyebrow">Let's Talk</p>
                <h2 className="display-lg mt-6 max-w-lg">
                  Tell us about your project, we'll take it from there.
                </h2>
                <p className="mt-6 max-w-lg text-base text-muted-foreground">
                  Fill in a few details and we'll turn it into a WhatsApp message straight to our
                  team, no waiting on a contact-form black hole.
                </p>

                <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2 sm:col-span-1">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your name
                    </label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Full Name"
                      className="h-12 rounded-[16px] bg-card"
                    />
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-1">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="yourname@gmail.com"
                      className="h-12 rounded-[16px] bg-card"
                    />
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-1">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91"
                      className="h-12 rounded-[16px] bg-card"
                    />
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-1">
                    <label htmlFor="service" className="text-sm font-medium">
                      Interested in
                    </label>
                    <Select
                      value={form.service}
                      onValueChange={(value) => update("service", value)}
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project details
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us a bit about your goals, timeline, or budget…"
                      className="rounded-[20px] bg-card"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                    <button type="submit" className="btn-primary">
                      {sent ? "Reopen WhatsApp" : "Send via WhatsApp"}
                      <Send className="size-4" />
                    </button>
                    {sent && (
                      <p className="text-sm text-muted-foreground">
                        Almost done. Just hit send in WhatsApp to reach us.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </Reveal>

            {/* Sidebar column */}
            <div className="flex flex-col gap-6">
              <Reveal delay={0.08} className="grid grid-cols-2 gap-4">
                {[
                  { value: "8+", label: "Years driving digital growth", Icon: Clock },
                  { value: "25+", label: "Brands partnered so far", Icon: Users },
                ].map(({ value, label, Icon }) => (
                  <div key={label} className="card-soft bg-foreground p-6 text-background">
                    <Icon className="size-5 text-accent" />
                    <CountUp
                      value={value}
                      className="mt-4 font-display text-3xl font-medium tracking-tight"
                    />
                    <p className="mt-2 text-xs text-background/70">{label}</p>
                  </div>
                ))}
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {channels.map(({ label, value, href, Icon }, i) => (
                  <Reveal key={label} delay={0.1 + i * 0.05}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="card-soft group flex items-center gap-5 p-6"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted">
                        <Icon className="size-5 text-accent" />
                      </span>
                      <span className="flex-1">
                        <p className="eyebrow">{label}</p>
                        <p className="mt-1 font-display text-base font-medium tracking-tight">
                          {value}
                        </p>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-paper text-paper-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">FAQs</p>
              <h2 className="display-lg mt-6 max-w-sm">Questions? We've probably answered them.</h2>
              <p className="mt-6 max-w-sm text-base text-paper-muted">
                Can't find what you're looking for? Send it straight to us on WhatsApp and we'll
                answer personally.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`item-${i}`} className="border-border py-2">
                    <AccordionTrigger className="font-display text-lg font-medium hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-paper-muted">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <Reveal className="card-soft flex flex-col gap-8 p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
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
        </Reveal>
      </section>
    </>
  );
}
