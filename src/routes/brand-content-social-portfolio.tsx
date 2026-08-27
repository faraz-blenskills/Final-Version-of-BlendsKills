import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ChevronRight, Play, X } from "lucide-react";

import { Reveal } from "../components/site/Reveal";
import reel1 from "../assets/portfolio/reels/reel-1.mp4";
import reel1Poster from "../assets/portfolio/reels/reel-1.jpg";
import reel1Full from "../assets/portfolio/reels/reel-1-full.mp4";
import reel2 from "../assets/portfolio/reels/reel-2.mp4";
import reel2Poster from "../assets/portfolio/reels/reel-2.jpg";
import reel2Full from "../assets/portfolio/reels/reel-2-full.mp4";
import reel3 from "../assets/portfolio/reels/reel-3.mp4";
import reel3Poster from "../assets/portfolio/reels/reel-3.jpg";
import reel3Full from "../assets/portfolio/reels/reel-3-full.mp4";
import reel4 from "../assets/portfolio/reels/reel-4.mp4";
import reel4Poster from "../assets/portfolio/reels/reel-4.jpg";
import reel4Full from "../assets/portfolio/reels/reel-4-full.mp4";

export const Route = createFileRoute("/brand-content-social-portfolio")({
  head: () => ({
    meta: [
      { title: "Branding, Content & Growth Portfolio | BlendSkills" },
      {
        name: "description",
        content:
          "How BlendSkills connects brand identity, video & content production, and social/SEO growth into one system. The full capabilities behind our Branding & Creative Design, Video Production & Content Creation, and SEO & Social Media Growth services.",
      },
      { property: "og:title", content: "Branding, Content & Growth Portfolio | BlendSkills" },
      {
        property: "og:description",
        content:
          "One connected partner for your complete brand and digital growth: identity, content, and organic growth working as a single system.",
      },
      { property: "og:url", content: "/brand-content-social-portfolio" },
    ],
    links: [{ rel: "canonical", href: "/brand-content-social-portfolio" }],
  }),
  component: BrandContentSocialPortfolioPage,
});

const pillars = [
  {
    title: "Branding",
    tags: "Identity • Logo • Guidelines • Creative Design • UI/UX • Corporate Design",
  },
  {
    title: "Content",
    tags: "Video • Reels • Ads • Photography • Motion Graphics • Editing",
  },
  {
    title: "Social Growth",
    tags: "Strategy • Instagram • LinkedIn • YouTube • Community • Personal Branding",
  },
  {
    title: "Digital Marketing",
    tags: "SEO • Local SEO • Content • Email • Social Marketing • Digital Strategy",
  },
];

const brandingColumns = [
  {
    title: "Brand Strategy & Identity",
    items: [
      "Brand positioning & personality",
      "Logo concepts & variations",
      "Colour palette, typography & visual systems",
      "Brand guidelines & usage rules",
      "Consistent identity across digital and print",
    ],
  },
  {
    title: "Creative & Business Design",
    items: [
      "Marketing creatives & campaign concepts",
      "Social & digital creative assets",
      "Company profiles, pitch decks & sales decks",
      "Brochures, catalogues & business documents",
      "Packaging, labels & product presentation",
      "UI/UX for websites, apps, dashboards & landing pages",
    ],
  },
];

const videoColumns = [
  {
    title: "Strategy",
    items: ["Creative strategy", "Storytelling", "Trend research", "Scriptwriting", "Storyboards", "Hooks"],
  },
  {
    title: "Production",
    items: [
      "Brand films",
      "Promotional videos",
      "Ad films",
      "Product videos",
      "Corporate films",
      "Interviews & testimonials",
      "Event videos",
      "Photography",
      "Drone / aerial",
    ],
  },
  {
    title: "Post Production",
    items: [
      "Video editing",
      "Reels / Shorts",
      "Motion graphics",
      "Animation",
      "Sound design",
      "Subtitles",
      "Colour correction / grading",
      "Platform optimization",
    ],
  },
];

const reels = [
  { src: reel1, poster: reel1Poster, full: reel1Full },
  { src: reel2, poster: reel2Poster, full: reel2Full },
  { src: reel3, poster: reel3Poster, full: reel3Full },
  { src: reel4, poster: reel4Poster, full: reel4Full },
];

const contentFormats = [
  "Reels & Shorts",
  "Brand Films",
  "Product Videos",
  "Corporate Videos",
  "Ad Creatives",
  "Event Content",
  "Educational",
  "Founder Led",
  "Testimonials",
  "Behind The Scenes",
  "Motion Graphics",
  "Social Clips",
];

const socialColumns = [
  {
    title: "Audience & Strategy",
    items: [
      "Brand / social audit",
      "Audience research",
      "Demographics, interests & behaviour",
      "Competitor analysis",
      "Content gaps & growth opportunities",
      "Content pillars",
    ],
  },
  {
    title: "Content & Management",
    items: [
      "Content calendars & captions",
      "Reels, carousels & stories",
      "Trend Based Content",
      "Community engagement",
      "Profile optimization",
      "Publishing coordination",
      "Performance analysis",
    ],
  },
];

const platforms = [
  { name: "Instagram", focus: "Reels • Stories • Carousels • Trends • Community" },
  { name: "LinkedIn", focus: "Personal branding • Thought leadership • B2B • Founder content" },
  { name: "Facebook", focus: "Page management • Video • Educational • Promotional • Engagement" },
  { name: "YouTube", focus: "Channel strategy • Shorts • Topic research • Titles • Thumbnails • Retention" },
];

const socialSuccessMeans = ["Reach", "Engagement", "Trust", "Community", "Conversion"];

const seoColumns = [
  {
    title: "SEO & Local Visibility",
    items: [
      "Keyword research & search intent",
      "On Page SEO",
      "Technical SEO",
      "Content strategy",
      "Local SEO",
      "Google Business Profile optimization",
      "Local keywords & Maps visibility",
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      "Social media marketing",
      "Content marketing",
      "Email campaigns",
      "Lead nurturing",
      "Website optimization",
      "Digital strategy",
      "Analytics & continuous improvement",
    ],
  },
];

const growthEngine = [
  { n: "01", title: "Audit", body: "Understand where the brand stands today." },
  { n: "02", title: "Strategy", body: "Prioritize what will actually move the needle." },
  { n: "03", title: "Create", body: "Build the identity, content, and campaigns." },
  { n: "04", title: "Publish", body: "Execute across the right platforms." },
  { n: "05", title: "Analyse", body: "Measure reach, engagement, and enquiries." },
  { n: "06", title: "Optimize", body: "Improve the system, month over month." },
];

const performanceAreas = [
  "Reach",
  "Impressions",
  "Audience growth",
  "Engagement rate",
  "Saves",
  "Shares",
  "Video views",
  "Watch time",
  "Profile visits",
  "Website clicks",
  "Enquiries",
  "Community growth",
];

const whyBlendskills = [
  "Strategy before activity",
  "Creative + business thinking",
  "Trend intelligence",
  "Platform Specific Execution",
  "Consistent brand communication",
  "Data Driven Improvement",
  "End To End Support",
];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal>
      <p className="eyebrow text-background/60">{eyebrow}</p>
      <h2 className="display-lg mt-3 max-w-xl text-background">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/70">{intro}</p>}
    </Reveal>
  );
}

const COLUMN_GRID_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

function InfoColumns({ columns }: { columns: { title: string; items: string[] }[] }) {
  return (
    <div className={`mt-8 grid gap-4 ${COLUMN_GRID_CLASS[columns.length] ?? ""}`}>
      {columns.map((col) => (
        <div key={col.title} className="glass-dark rounded-[24px] p-6 sm:p-7">
          <h3 className="font-display text-lg font-medium text-background">{col.title}</h3>
          <ul className="mt-4 space-y-2.5">
            {col.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-background/70">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-y-3">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={step} className="flex items-center">
            <span
              className={
                isLast
                  ? "rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent-foreground"
                  : "glass-dark rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide text-background/85"
              }
            >
              {step}
            </span>
            {!isLast && <ChevronRight className="mx-1 size-4 shrink-0 text-accent" />}
          </div>
        );
      })}
    </div>
  );
}

function ReelCard({
  src,
  poster,
  onOpen,
}: {
  src: string;
  poster: string;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Play video"
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="cursor-hover-target group relative aspect-9/16 w-[170px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-background/10 bg-muted sm:w-[200px]"
      onMouseEnter={() => {
        void videoRef.current?.play();
      }}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <img
        src={poster}
        alt=""
        draggable={false}
        className="size-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/25">
        <span className="flex size-11 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-[var(--shadow-nav)] transition-opacity duration-300 group-hover:opacity-100">
          <Play className="size-4 translate-x-0.5 fill-foreground text-foreground" />
        </span>
      </div>
    </div>
  );
}

function ReelModal({
  reel,
  onClose,
}: {
  reel: { src: string; poster: string; full: string };
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative aspect-9/16 max-h-[88vh] w-auto overflow-hidden rounded-[28px] bg-black shadow-[var(--shadow-feature)]"
      >
        <video
          key={reel.full}
          src={reel.full}
          poster={reel.poster}
          controls
          autoPlay
          playsInline
          className="h-full max-h-[88vh] w-auto object-contain"
        />
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="cursor-hover-target absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-foreground/15 bg-surface text-foreground transition-colors hover:bg-muted"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}

function ReelRail() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openReel = openIndex !== null ? reels[openIndex] : null;

  return (
    <>
      <div
        className="relative mt-8 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="animate-reel-rail flex w-max gap-5">
          <div className="flex flex-none gap-5">
            {reels.map((r, i) => (
              <ReelCard key={i} src={r.src} poster={r.poster} onOpen={() => setOpenIndex(i)} />
            ))}
          </div>
          <div aria-hidden="true" className="flex flex-none gap-5">
            {reels.map((r, i) => (
              <ReelCard
                key={`dup-${i}`}
                src={r.src}
                poster={r.poster}
                onOpen={() => setOpenIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {openReel && <ReelModal reel={openReel} onClose={() => setOpenIndex(null)} />}
    </>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="glass-dark rounded-full px-4 py-2 text-xs font-medium text-background/80"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function BrandContentSocialPortfolioPage() {
  return (
    <>
      <section data-cursor-zone="dark" className="relative overflow-hidden bg-foreground text-background">
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
              / Branding, Content &amp; Growth Portfolio
            </p>
            <h1 className="display-xl mt-6 max-w-3xl text-background">
              One Connected Partner for Your Complete{" "}
              <span className="animate-shimmer-text">Brand &amp; Digital Growth</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
              From building your identity and producing high impact content to growing your
              audience and improving search visibility, we connect creative execution with
              business objectives. This is the full system behind our Branding &amp; Creative
              Design, Video Production &amp; Content Creation, and SEO &amp; Social Media Growth
              services.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14">
              <p className="eyebrow text-background/60">Our Complete Service Ecosystem</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pillars.map((p) => (
                  <div key={p.title} className="glass-dark rounded-[20px] p-6">
                    <p className="font-display text-lg font-medium text-background">{p.title}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-background/60">{p.tags}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ---------------- 01 BRANDING ---------------- */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="01. Branding & Creative Solutions"
              title="Build a brand people recognize, trust and remember."
            />
            <Reveal delay={0.1}>
              <InfoColumns columns={brandingColumns} />
            </Reveal>
          </div>

          {/* ---------------- 02 VIDEO & CONTENT ---------------- */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="02. Video Production & Content Creation"
              title="Turn ideas into visual experiences designed for attention, communication and action."
            />
            <Reveal delay={0.1}>
              <InfoColumns columns={videoColumns} />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 eyebrow text-background/60">Content Formats We Support</p>
              <TagRow tags={contentFormats} />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 eyebrow text-background/60">Recent Work</p>
              <ReelRail />
            </Reveal>
          </div>

          {/* ---------------- 03 SOCIAL GROWTH ---------------- */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="03. Social Media Growth"
              title="Content that earns attention, trust and community."
            />
            <Reveal delay={0.1}>
              <FlowDiagram steps={["Content", "Attention", "Engagement", "Trust", "Community", "Growth"]} />
            </Reveal>
            <Reveal delay={0.15}>
              <InfoColumns columns={socialColumns} />
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-10 eyebrow text-background/60">Platform Specific Support</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {platforms.map((p) => (
                  <div key={p.name} className="glass-dark rounded-[20px] p-5">
                    <p className="font-display text-base font-medium text-background">{p.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-background/60">{p.focus}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 eyebrow text-background/60">What Social Success Means</p>
              <TagRow tags={socialSuccessMeans} />
            </Reveal>
          </div>

          {/* ---------------- 04 DIGITAL MARKETING & SEO ---------------- */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="04. Digital Marketing & SEO"
              title="Search visibility and organic growth, built on strategy, not guesswork."
            />
            <Reveal delay={0.1}>
              <InfoColumns columns={seoColumns} />
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-10 eyebrow text-background/60">The BlendSkills Growth Engine</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {growthEngine.map((s) => (
                  <div key={s.n} className="glass-dark rounded-[20px] p-5">
                    <p className="font-display text-sm text-accent">{s.n}</p>
                    <h3 className="mt-3 text-sm font-medium text-background">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-background/60">{s.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 eyebrow text-background/60">Key Performance Areas We Can Analyse</p>
              <TagRow tags={performanceAreas} />
            </Reveal>
          </div>

          {/* ---------------- WHY BLENDSKILLS ---------------- */}
          <Reveal delay={0.1}>
            <div className="glass-dark mt-20 rounded-[28px] p-8 sm:p-10">
              <h2 className="display-lg max-w-2xl text-background">Why BlendSkills?</h2>
              <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {whyBlendskills.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-background/85">
                    <CheckCircle2 className="size-5 shrink-0 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-background/60">The complete growth journey</p>
              <FlowDiagram
                steps={["Brand", "Content", "Social", "Search", "Trust", "Engagement", "Enquiry", "Growth"]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-background/10 bg-foreground text-background">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-24 sm:px-8">
          <Reveal>
            <h2 className="display-lg max-w-xl">
              Let's turn your brand and digital presence into a connected growth engine.
            </h2>
            <p className="mt-4 max-w-lg text-base text-background/70">
              Tell us about your business and we'll show you what a connected branding, content,
              and growth engagement could look like for you.
            </p>
            <a
              href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27d%20like%20to%20discuss%20branding%2C%20content%20and%20growth%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Get a Free Consultation <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
