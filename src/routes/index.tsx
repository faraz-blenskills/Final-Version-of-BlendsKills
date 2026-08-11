import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowUpRight, HeartHandshake, LineChart, Sparkles, Star, Target } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Reveal } from "../components/site/Reveal";
import { CountUp } from "../components/site/CountUp";
import { ArcImageCarousel, type ArcCarouselItem } from "../components/site/ArcImageCarousel";
import { LogoRail, type LogoRailItem } from "../components/site/LogoRail";
import heroMotion from "../assets/hero-motion.mp4";
import howWeExecuteMotion from "../assets/how-we-execute-motion.mp4";
import adypuCommunity from "../assets/portfolio/adypu-community.png";
import vibrantHr from "../assets/portfolio/vibrant-hr.png";
import communityStay from "../assets/portfolio/community-stay.png";
import jobizzaLogo from "../assets/portfolio/jobizza.png";
import zyphersLogo from "../assets/portfolio/zyphers.png";
import toyworldHotwheels from "../assets/portfolio/toyworld-hotwheels.png";
import diamondWaterPark from "../assets/portfolio/diamond-water-park.png";
import imagicaaLogo from "../assets/portfolio/imagicaa.png";
import digiGrowHub from "../assets/portfolio/digi-grow-hub.png";
import canvaLogo from "../assets/logo-rail/canva.png";
import reactLogo from "../assets/logo-rail/react.png";
import nodejsLogo from "../assets/logo-rail/nodejs.png";
import wordpressLogo from "../assets/logo-rail/wordpress.png";
import hubspotLogo from "../assets/logo-rail/hubspot.png";
import hostingerLogo from "../assets/logo-rail/hostinger.png";
import googleAdsLogo from "../assets/logo-rail/google-ads.png";
import zapierLogo from "../assets/logo-rail/zapier.png";
import cloudflareLogo from "../assets/logo-rail/cloudflare.png";
import openaiLogo from "../assets/logo-rail/openai.png";
import claudeLogo from "../assets/logo-rail/claude.png";
import googleAnalyticsLogo from "../assets/logo-rail/google-analytics.png";
import metaLogo from "../assets/logo-rail/meta.png";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "BlendSkills — Digital Marketing & Web Development in Pune | Gaya",
      },
      {
        name: "description",
        content:
          "BlendSkills drives growth through development and digital marketing — SEO, Google Ads, social media, branding, website and app development in Pune and Gaya.",
      },
      {
        property: "og:title",
        content: "BlendSkills — Driving Growth Through Development and Digital Marketing",
      },
      {
        property: "og:description",
        content:
          "Data-driven strategies, creative storytelling, and cutting-edge web solutions. When results matter, brands choose us.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { value: "10+", label: "Years of experience on digital marketing services" },
  { value: "95%", label: "Improved projects delivered for growing brands" },
  { value: "80%", label: "New projects won through referral and results" },
  { value: "100+", label: "Brands partnered across Pune, Gaya and beyond" },
];

const whyCards = [
  {
    Icon: LineChart,
    title: "Data-Driven Approach",
    body: "We use analytics, insights, and performance data to build marketing strategies that drive measurable growth. Every campaign is optimized using real-time data to maximize ROI and business results.",
  },
  {
    Icon: Sparkles,
    title: "Creative & Innovative",
    body: "We blend creative storytelling with innovative digital solutions to build unique brand experiences that stand out online. Our team crafts designs and strategies that inspire engagement and boost conversions.",
  },
  {
    Icon: Target,
    title: "ROI-Focused Marketing",
    body: "We don't just run campaigns — we build profitable growth engines. Every strategy is designed to deliver higher returns, better conversions, and sustainable business growth.",
  },
  {
    Icon: HeartHandshake,
    title: "Dedicated Growth Partner",
    body: "You don't just get an agency — you get a committed digital partner driven by your success. Transparency, dedication, and innovation guide every project we take on.",
  },
];

const portfolioLogos: ArcCarouselItem[] = [
  { title: "ADYPU Community", logo: adypuCommunity },
  { title: "Vibrant HR", logo: vibrantHr },
  { title: "Community Stay", logo: communityStay },
  { title: "Jobizza", logo: jobizzaLogo },
  { title: "Zypher's", logo: zyphersLogo },
  { title: "Toyworld Hot Wheels", logo: toyworldHotwheels },
  { title: "Diamond Water Park", logo: diamondWaterPark },
  { title: "Imagicaa", logo: imagicaaLogo },
  { title: "Digi Grow Hub", logo: digiGrowHub },
];

const testimonials = [
  {
    quote:
      "BlendSkills rebuilt our funnel from the ground up. Leads tripled in three months and the cost per acquisition dropped by half.",
    name: "Rohit S.",
    role: "Founder, Jobizza",
  },
  {
    quote:
      "Their team understood our brand instantly. The website is fast, beautiful, and finally converts the traffic we were paying for.",
    name: "Priya M.",
    role: "Marketing Head, Hospitality Group",
  },
  {
    quote:
      "Transparent reporting, sharp creative, real accountability. BlendSkills feels like an in-house team, not a vendor.",
    name: "Amit K.",
    role: "Director, Retail Chain",
  },
];

const logoRailRowA: LogoRailItem[] = [
  { name: "Canva", logo: canvaLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Hostinger", logo: hostingerLogo },
  { name: "Google Ads", logo: googleAdsLogo },
];

const logoRailRowB: LogoRailItem[] = [
  { name: "Zapier", logo: zapierLogo },
  { name: "Cloudflare", logo: cloudflareLogo },
  { name: "OpenAI", logo: openaiLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Google Analytics", logo: googleAnalyticsLogo },
  { name: "Meta", logo: metaLogo },
];

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("[data-hero-eyebrow]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          "[data-hero-line]",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
          "-=0.4",
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          "[data-hero-contact]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        );

      if (heroImgRef.current && heroRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="bg-background px-4 pb-6 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div
          ref={heroRef}
          data-cursor-zone="dark"
          className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[40px] sm:h-[75svh] sm:max-h-[820px] sm:min-h-[560px]"
        >
          <video
            ref={heroImgRef}
            src={heroMotion}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 size-full scale-110 object-cover"
          />
          <div className="veil absolute inset-0" />

          <div className="relative flex flex-col justify-end p-6 pb-10 text-background sm:h-full sm:p-10 lg:p-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p data-hero-eyebrow className="eyebrow text-background/70 opacity-0">
                  Powering Success for Top Brands
                </p>
                <h1 className="display-xl mt-6 overflow-hidden">
                  <span data-hero-line className="block opacity-0">
                    Driving Growth Through
                  </span>
                  <span data-hero-line className="block opacity-0">
                    Development and
                  </span>
                  <span data-hero-line className="block opacity-0">
                    Digital Marketing.
                  </span>
                </h1>
                <p
                  data-hero-sub
                  className="mt-8 max-w-xl text-base leading-relaxed text-background/80 opacity-0"
                >
                  We accelerate brand success with data-driven strategies, creative storytelling,
                  and cutting-edge web solutions. When results matter, brands choose experience —
                  and they choose us.
                </p>
                <Link
                  data-hero-cta
                  to="/contact-us"
                  className="btn-primary mt-10 opacity-0"
                >
                  Get a Free Consultation
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <div data-hero-contact className="shrink-0 opacity-0 lg:text-right">
                <p className="eyebrow text-background/70">Pune | Gaya, India</p>
                <a
                  href="tel:+919175789966"
                  className="cursor-hover-target mt-2 block font-display text-lg tracking-tight"
                >
                  +91 9175789966
                </a>
                <a
                  href="mailto:info@blendskills.co.in"
                  className="cursor-hover-target mt-1 block text-sm text-background/70"
                >
                  info@blendskills.co.in
                </a>
              </div>
            </div>
          </div>

          <div className="animate-scroll-cue pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
            <span className="eyebrow text-background/50">Scroll</span>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT / STATS ---------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow">Our Expertise</p>
            <h2 className="display-lg mt-6 max-w-3xl">
              Data driven strategies, measurable results.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                At <span className="text-foreground">BlendSkills</span>, we craft result-driven
                digital marketing strategies and high-performance websites that help brands grow
                faster with real business impact. As a trusted digital marketing and web
                development company in Pune and Gaya, we specialize in SEO, social media marketing,
                Google Ads, branding, website development, and app development. We also provide
                complete technical support, maintenance, and custom software solutions so your
                business scales smoothly with long-term digital success.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-y-10">
              {stats.map((s, i) => (
                <Reveal key={s.value} delay={0.15 + i * 0.06}>
                  <CountUp
                    value={s.value}
                    className="font-display text-5xl font-medium tracking-tight sm:text-6xl"
                  />
                  <p className="mt-3 max-w-[15rem] text-sm text-muted-foreground">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <p className="mt-14 max-w-xl text-sm text-muted-foreground">
            Building brands with strategy, creativity, and technology.
          </p>
        </div>
      </section>

      {/* ---------------- SERVICES CAROUSEL ---------------- */}
      <section className="bg-paper text-paper-foreground">
        <div className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="flex flex-col">
              <h2 className="display-lg">
                How we
                <br />
                execute
              </h2>
              <p className="mt-8 max-w-md text-base text-paper-muted">
                At BlendSkills, we transform ideas into scalable digital experiences through a
                strategic, AI-driven execution process. We begin by understanding your business,
                audience, and goals, then craft a tailored strategy backed by research and data.
                Our team designs intuitive user experiences, develops high-performance websites
                and intelligent digital solutions, and rigorously tests every detail before
                launch. But our work doesn't end there—we continuously optimize, analyze, and
                refine your digital ecosystem using AI, automation, and performance insights to
                ensure sustainable growth, measurable results, and long-term business success.
              </p>
            </div>

            <video
              src={howWeExecuteMotion}
              autoPlay
              muted
              loop
              playsInline
              className="aspect-square w-full rounded-[40px] object-cover lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE ---------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow">Why Choose BlendSkills</p>
            <h2 className="display-lg mt-6 max-w-2xl">
              Your growth isn't a campaign metric. It's the whole point.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {whyCards.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card-soft cursor-hover-target h-full p-8">
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

      {/* ---------------- PORTFOLIO PREVIEW ---------------- */}
      <section className="bg-paper text-paper-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <Reveal>
            <ArcImageCarousel
              items={portfolioLogos}
              title="Brand's we've helped to grow"
              subtitle="A glimpse of the partners we've built strategy, sites, and campaigns for across Pune, Gaya, and beyond."
              ctaLabel="View full portfolio"
              ctaTo="/services"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
          <Reveal>
            <p className="eyebrow">What Our Clients Say</p>
            <h2 className="display-lg mt-6 max-w-3xl">
              Hear from our satisfied clients, real success stories.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <blockquote className="card-paper cursor-hover-target flex h-full flex-col p-8">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-6 flex-1 text-lg leading-relaxed">"{t.quote}"</p>
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

      {/* ---------------- TRUSTED BY ---------------- */}
      <section className="bg-paper text-paper-foreground">
        <div className="mx-auto max-w-[1400px] px-5 pt-20 text-center sm:px-8">
          <Reveal>
            <p className="display-lg text-paper-foreground">Powered by Advance Technologies</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-10 pb-20">
          <LogoRail rowA={logoRailRowA} rowB={logoRailRowB} />
        </Reveal>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section data-cursor-zone="dark" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-5 py-28 text-center sm:px-8">
          <Reveal>
            <h2 className="display-xl mx-auto max-w-3xl">
              Ready to grow
              <br />
              with BlendSkills?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-base text-background/70">
              Take your digital marketing to the next level with data-driven strategies and
              innovative solutions. Let's create something amazing together!
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-12 flex justify-center">
            <a
              href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill cursor-hover-target group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-medium text-foreground transition-opacity hover:opacity-88"
            >
              Get a Free Strategy Call
              <ArrowUpRight className="size-5 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
