import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  HeartHandshake,
  Lightbulb,
  Palette,
  Target,
  TrendingUp,
} from "lucide-react";

import { Reveal } from "../components/site/Reveal";
import { CountUp } from "../components/site/CountUp";
import { TeamCarousel, type TeamMember } from "../components/site/TeamCarousel";
import aboutImg from "../assets/about.jpg";
import omPolPhoto from "../assets/team/om-pol.jpg";
import farazSayyedPhoto from "../assets/team/faraz-sayyed.jpg";
import saraBakshiPhoto from "../assets/team/sara-bakshi.jpg";
import yashJagtapPhoto from "../assets/team/yash-jagtap.jpg";
import sahilPardeshiPhoto from "../assets/team/sahil-pardeshi.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us: BlendSkills Digital Marketing & Web Development" },
      {
        name: "description",
        content:
          "BlendSkills is a leading digital marketing and web development company in Pune, Maharashtra with a strong presence in Gaya, Bihar. Learn who we are, our core values, and how we work.",
      },
      { property: "og:title", content: "About Us | BlendSkills" },
      {
        property: "og:description",
        content:
          "Who we are and what drives us: innovation, results, and trust across every project we deliver.",
      },
      { property: "og:url", content: "/about-us" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutUsPage,
});

const checklistA = ["Web Development", "Brand Strategy", "SEO Optimization"];
const checklistB = ["Performance Marketing", "Social Media Growth", "Creative Design"];

const whyUsCards = [
  {
    Icon: Lightbulb,
    title: "Innovation First",
    body: "We combine creativity and technology to build smart digital solutions that help brands stay ahead in the competitive market.",
  },
  {
    Icon: Target,
    title: "Results-Driven Approach",
    body: "Every strategy we create is focused on measurable growth, quality leads, and long-term business success.",
  },
  {
    Icon: HeartHandshake,
    title: "Trust & Transparency",
    body: "We believe in honest communication, clear reporting, and building strong partnerships that grow together.",
  },
];

const principles = [
  { Icon: Lightbulb, label: "Innovation" },
  { Icon: Palette, label: "Creativity" },
  { Icon: Eye, label: "Transparency" },
  { Icon: TrendingUp, label: "Results" },
];

const steps = [
  {
    n: "01",
    title: "Discovery & Consult",
    body: "We understand your business goals, audience, and market challenges to identify the right digital growth opportunities.",
  },
  {
    n: "02",
    title: "Strategy & Planning",
    body: "Our team creates customized marketing and development strategies designed to maximize visibility, engagement, and ROI.",
  },
  {
    n: "03",
    title: "Execution & Optimize",
    body: "We execute high-performance campaigns and continuously optimize them using data-driven insights and analytics.",
  },
  {
    n: "04",
    title: "Results & Growth",
    body: "We focus on measurable outcomes that increase brand awareness, generate quality leads, and drive long-term business growth.",
  },
];

const proofStats = [
  { value: "4.8", label: "Average Rating" },
  { value: "95%", label: "Client satisfaction across every project" },
  { value: "85%", label: "Average business growth rate delivered" },
];

const team: TeamMember[] = [
  {
    name: "Om Pol",
    role: "Chief Operating Officer",
    quote: "Building quietly. Growing consistently.",
    photo: omPolPhoto,
    photoPosition: "50% 8%",
  },
  {
    name: "Faraz Sayyed",
    role: "IT Head",
    quote: "Do not wait for confidence, take action to build confidence.",
    photo: farazSayyedPhoto,
    photoPosition: "50% 8%",
    photoSize: "170% auto",
  },
  {
    name: "Sara Bakshi",
    role: "Head of R&D",
    quote:
      "Every hypothesis we test is rigorously validated by empirical metrics and real-world utility.",
    photo: saraBakshiPhoto,
    photoPosition: "50% 15%",
  },
  {
    name: "Yash Jagtap",
    role: "Chief Head of Media",
    quote:
      "Creativity with consistency creates impact. I believe in learning, experimenting, and creating content that connects.",
    photo: yashJagtapPhoto,
    photoPosition: "50% 6%",
  },
  {
    name: "Sahil Pardeshi",
    role: "Senior Developer",
    quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    photo: sahilPardeshiPhoto,
    photoPosition: "50% 10%",
  },
];

const testimonials = [
  {
    quote:
      "Working with BlendSkills has been a game-changer for our brand. Their data-driven marketing approach and technical expertise helped us scale faster and achieve measurable digital success.",
    name: "Propel Stay",
    role: "Founder: Rakhi Shrivastava",
  },
  {
    quote:
      "BlendSkills helped us build a strong digital identity with creative branding, website development, and targeted marketing campaigns. Their dedicated support and growth-focused strategies delivered outstanding results for our business.",
    name: "Life Time Memories",
    role: "Founder: Sagar",
  },
  {
    quote:
      "BlendSkills transformed our online presence with powerful branding and performance marketing strategies. Their professional approach and creative execution helped us generate quality leads and significantly boost our business growth.",
    name: "Edu-Tech Master Academy (Website & LMS)",
    role: "Founder: Abhishekh Dubey",
  },
  {
    quote:
      "The team at BlendSkills delivered exactly what our business needed, from website development to social media marketing. Their SEO-focused strategies helped us improve visibility and attract the right audience.",
    name: "Toy World",
    role: "Founder: Murtuza Poonawalla",
  },
];

function AboutUsPage() {
  return (
    <>
      {/* Sits beside the site logo (rendered separately, top-left, scrolls with the page). */}
      <div className="absolute left-[96px] top-6 z-40 hidden h-11 items-center sm:left-[120px] sm:flex">
        <p className="font-display text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm">
          Blendskills Private Limited
        </p>
      </div>

      {/* ---------------- HERO / WHO WE ARE ---------------- */}
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-40 sm:px-8">
        <p className="eyebrow">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          / About Us
        </p>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <Reveal className="flex flex-col">
            <img
              src={aboutImg}
              alt="The BlendSkills team collaborating"
              loading="lazy"
              className="aspect-4/5 w-full rounded-[40px] object-cover"
            />
            <div className="card-soft mt-6 bg-foreground p-8 text-background">
              <CountUp
                value="8+"
                className="font-display text-5xl font-medium tracking-tight sm:text-6xl"
              />
              <p className="mt-3 max-w-[16rem] text-sm text-background/70">
                Years of experience on digital marketing services
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">About Us</p>
              <h1 className="display-xl mt-6">
                Who We Are & What <span className="text-accent">Drives Us</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                BlendSkills is a leading{" "}
                <span className="font-medium text-foreground">
                  digital marketing and web development company in Pune, Maharashtra
                </span>
                , helping businesses grow with innovative marketing strategies, creative
                branding, and powerful technology solutions. With a strong presence{" "}
                <span className="font-medium text-foreground">across Pan India</span>, we
                specialize in SEO, social media marketing, website development, software
                solutions, and performance-driven digital campaigns tailored for startups, local
                businesses, and growing brands.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                What drives us is our passion for creating real business impact through smart
                digital transformation. We believe every brand deserves strong online visibility,
                quality lead generation, and scalable digital solutions that deliver measurable
                growth. At BlendSkills, we combine creativity, strategy, and technology to help
                businesses across Maharashtra, Bihar, and beyond build a successful digital
                future.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
              {[checklistA, checklistB].map((col, i) => (
                <ul key={i} className="space-y-4">
                  {col.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="size-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="bg-paper text-paper-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow">Why BlendSkills</p>
            <h2 className="display-lg mt-6 max-w-2xl">
              What makes us a growth partner brands stick with.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {whyUsCards.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card-paper cursor-hover-target h-full p-8">
                  <span className="flex size-14 items-center justify-center rounded-full bg-muted">
                    <Icon className="size-6 text-accent" />
                  </span>
                  <h3 className="mt-6 text-xl font-medium">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <p className="eyebrow">Our Core Values</p>
              <h2 className="display-lg mt-6 max-w-lg">The Principles That Define Us.</h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                At BlendSkills, our principles are built around innovation, creativity,
                transparency, and results-driven execution. We believe in combining smart digital
                marketing strategies with powerful development solutions to create meaningful
                business growth for our clients. Our focus is not just on delivering services,
                but on building long-term partnerships through trust, quality, and continuous
                innovation. With a passion for technology and performance, we help businesses
                across Pune, Maharashtra, Gaya, Bihar, and beyond achieve lasting digital
                success.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="grid grid-cols-2 gap-4">
              {principles.map(({ Icon, label }) => (
                <div key={label} className="card-soft cursor-hover-target p-8 text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-muted">
                    <Icon className="size-6 text-accent" />
                  </span>
                  <p className="mt-5 font-display text-lg font-medium">{label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section data-cursor-zone="dark" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <Reveal>
              <p className="eyebrow text-background/70">How It Works</p>
              <h2 className="display-lg mt-6 max-w-md">Simple Steps to Digital Success.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xl text-base leading-relaxed text-background/70">
                Our streamlined approach helps businesses achieve sustainable digital growth
                through smart strategy, creative execution, and continuous optimization. At
                BlendSkills, we combine digital marketing, branding, and development solutions to
                deliver measurable business success for brands across Pune, Maharashtra, Gaya,
                Bihar, and beyond.
              </p>
              <Link
                to="/contact-us"
                className="link-underline mt-8 border-background/30 text-sm font-medium text-background hover:border-accent"
              >
                Get Started Now
                <ArrowUpRight className="size-4 text-accent" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[40px] bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <Reveal key={s.n} delay={Number(s.n) * 0.05} className="bg-foreground p-8">
                <p className="font-display text-sm text-accent">{s.n}</p>
                <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MEET OUR TEAM ---------------- */}
      <section data-cursor-zone="dark" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-background/70">Our Team</p>
            <h2 className="display-lg mt-6">The People Behind BlendSkills.</h2>
            <p className="mt-6 text-base leading-relaxed text-background/70">
              Senior team that stays close to every project: strategy, design, development, and
              growth, handled by people who actually do the work.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mx-auto mt-16 w-full lg:w-4/5">
            <TeamCarousel members={team} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- SOCIAL PROOF + TESTIMONIALS ---------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:justify-between">
            <Reveal>
              <p className="eyebrow">What Our Clients Say</p>
              <h2 className="display-lg mt-6 max-w-xl">
                Hear from our satisfied clients, real success stories.
              </h2>
              <p className="mt-6 max-w-lg text-base text-muted-foreground">
                See how BlendSkills helps businesses grow with result-driven digital marketing,
                branding, and development solutions across Pune, Gaya, and beyond.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="grid grid-cols-3 gap-6 lg:justify-items-end">
              {proofStats.map((s) => (
                <div key={s.value}>
                  <CountUp
                    value={s.value}
                    className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
                  />
                  <p className="mt-2 max-w-[9rem] text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <blockquote className="card-paper cursor-hover-target flex h-full flex-col p-8">
                  <p className="flex-1 text-lg leading-relaxed">"{t.quote}"</p>
                  <footer className="mt-8">
                    <p className="font-display text-sm uppercase tracking-widest">{t.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
        <Reveal className="card-soft flex flex-col gap-8 p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div>
            <h2 className="display-lg max-w-2xl">Transform Your Business with BlendSkills!</h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Take your digital marketing to the next level with data-driven strategies and
              innovative solutions. Let's create something amazing together!
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
        </Reveal>
      </section>
    </>
  );
}
