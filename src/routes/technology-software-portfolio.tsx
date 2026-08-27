import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/technology-software-portfolio")({
  head: () => ({
    meta: [
      { title: "Technology & Software Development Portfolio | BlendSkills" },
      {
        name: "description",
        content:
          "Custom software, CRM, ERP, business automation, and AI-powered systems built by BlendSkills. The full capabilities behind our AI & Business Automation service, plus WorkPilot, our own in-house platform.",
      },
      { property: "og:title", content: "Technology & Software Development Portfolio | BlendSkills" },
      {
        property: "og:description",
        content:
          "We don't just build software. We build digital systems that help businesses scale: custom software, CRM, ERP, automation, and AI, working together as one system.",
      },
      { property: "og:url", content: "/technology-software-portfolio" },
    ],
    links: [{ rel: "canonical", href: "/technology-software-portfolio" }],
  }),
  component: TechnologySoftwarePortfolioPage,
});

const processSteps = [
  { n: "01", title: "Your Business", body: "Understand the problem before building the solution." },
  { n: "02", title: "Strategy & Architecture", body: "Requirements, features, system design, and scalability, planned before a line of code is written." },
  { n: "03", title: "UI/UX Design", body: "User-friendly interfaces, clear navigation, and conversion-focused layouts." },
  { n: "04", title: "Development", body: "Websites, web applications, business software, dashboards, and integrations, built." },
  { n: "05", title: "Testing & Optimization", body: "Functionality, performance, security, and stability, checked before launch." },
  { n: "06", title: "Deployment & Support", body: "Hosting, maintenance, upgrades, and ongoing technical support after launch." },
];

const techServices = [
  {
    title: "Website Development",
    tagline: "Visibility. Credibility. Conversions. Growth.",
    tags: [
      "Corporate Websites",
      "Business Websites",
      "Portfolio Websites",
      "Landing Pages",
      "E-commerce Websites",
      "Booking Websites",
      "Custom Websites",
      "WordPress Websites",
    ],
  },
  {
    title: "Custom Software Development",
    tagline: "Software should adjust to your business, not the other way around.",
    tags: [
      "Enterprise Applications",
      "Workflow Management Systems",
      "Employee Management Systems",
      "Attendance Systems",
      "Inventory Systems",
      "Booking Management Systems",
      "Internal Business Portals",
      "Custom Dashboards",
    ],
  },
  {
    title: "CRM Development",
    tagline: "From lead to customer, everything in one system.",
    tags: [
      "Lead Management",
      "Customer Data Management",
      "Sales Pipeline Tracking",
      "Follow-up Management",
      "Task Assignment",
      "Communication Tracking",
      "Reporting Dashboards",
    ],
  },
  {
    title: "ERP Solutions",
    tagline: "One connected system. Better business visibility.",
    tags: [
      "Operations Management",
      "Inventory",
      "Employee Management",
      "Sales",
      "Customer Management",
      "Workflow Tracking",
      "Department Coordination",
    ],
  },
  {
    title: "LMS & Education Technology",
    tagline: "Technology for modern learning.",
    tags: [
      "Student Management",
      "Course Management",
      "Learning Content",
      "Assessments",
      "Certificates",
      "Progress Tracking",
      "Admin Panels",
    ],
  },
  {
    title: "Web Applications & Digital Platforms",
    tagline: "Built around specific user and business requirements.",
    tags: [
      "Customer Portals",
      "Vendor Portals",
      "Booking Platforms",
      "Management Dashboards",
      "SaaS Products",
      "Marketplace Platforms",
      "Community Platforms",
    ],
  },
  {
    title: "Business Automation",
    tagline: "Stop repeating what technology can do for you.",
    tags: [
      "Lead Routing",
      "Automated Follow-ups",
      "Customer Notifications",
      "Reporting",
      "Form Integrations",
      "CRM Automation",
      "Email & Marketing Automation",
    ],
  },
  {
    title: "API & Third-Party Integrations",
    tagline: "Connecting the platforms modern businesses already run on.",
    tags: [
      "CRM Integrations",
      "Payment Gateway Integrations",
      "WhatsApp Integrations",
      "Email Systems",
      "Marketing Platforms",
      "Data Synchronization",
    ],
  },
  {
    title: "AI-Powered Technology Solutions",
    tagline: "We focus on using AI where it creates real business value.",
    tags: [
      "AI Chatbots & Assistants",
      "Intelligent Customer Support",
      "AI Workflow Automation",
      "Generative AI Integration",
      "Document Processing & OCR",
      "Computer Vision",
      "AI-Powered Dashboards",
    ],
  },
];

const growthStages = [
  {
    title: "For Startups",
    items: ["MVP Development", "Startup Websites", "Landing Pages", "SaaS Development", "Product Prototypes"],
  },
  {
    title: "For Growing Businesses",
    items: ["Custom Software", "CRM", "Automation", "Dashboards", "Process Digitization"],
  },
  {
    title: "For Enterprises",
    items: ["Business Applications", "Workflow Systems", "ERP", "Integrations", "Custom Enterprise Solutions"],
  },
];

const whyBlendskills = [
  "Technology + Business Understanding",
  "Custom-Built Solutions",
  "Scalable Development",
  "User-Focused Design",
  "End-to-End Execution",
  "Integrated Digital Expertise",
];

const techStack = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "PHP", "REST APIs"] },
  { group: "Databases", items: ["MySQL", "SQL", "MongoDB", "Firebase"] },
  { group: "Platforms", items: ["WordPress", "WooCommerce", "GitHub", "Cloud Technologies"] },
  {
    group: "AI & Automation",
    items: ["Generative AI", "OpenAI Technologies", "Claude AI", "Automation Workflows", "Computer Vision"],
  },
];

const workpilotCapabilities = [
  "Kanban Boards & Task Management",
  "Time, Attendance & Leave",
  "Team Chat",
  "Reporting & Insights",
  "Role-Based Access Control",
  "Multi-Workspace Support",
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p className="eyebrow text-background/60">{eyebrow}</p>
      <h2 className="display-lg mt-3 max-w-xl text-background">{title}</h2>
    </Reveal>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="glass-dark rounded-full px-3 py-1.5 text-xs font-medium text-background/80"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function TechnologySoftwarePortfolioPage() {
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
              / Technology & Software Development Portfolio
            </p>
            <h1 className="display-xl mt-6 max-w-3xl text-background">
              We Don't Just Build Software.{" "}
              <span className="animate-shimmer-text">We Build Digital Systems</span> That Help
              Businesses Scale.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
              A website can create a presence. A powerful software system can transform an entire
              business. We design and develop digital products that solve real business problems,
              from websites and web applications to custom software, CRM, ERP, dashboards, and
              AI-powered systems. This is the full system behind our AI & Business Automation
              service.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14">
              <p className="eyebrow text-background/60">From Idea to Digital Product</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {processSteps.map((s) => (
                  <div key={s.n} className="glass-dark rounded-[20px] p-5">
                    <p className="font-display text-sm text-accent">{s.n}</p>
                    <h3 className="mt-3 text-sm font-medium text-background">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-background/60">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ---------------- FEATURED PROJECT: WORKPILOT ---------------- */}
          <div className="mt-20">
            <SectionHeading eyebrow="Featured Project" title="Built in-house: WorkPilot" />
            <Reveal delay={0.1}>
              <div className="glass-dark mt-8 rounded-[28px] p-8 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="animate-shimmer-text font-display text-3xl font-medium">
                    WorkPilot
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                    <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                    Available
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/70">
                  A unified project management, time & attendance, leave and team-chat platform,
                  built end-to-end and fully owned, not stitched together from rented SaaS seats.
                  It's the same kind of custom business software, workflow automation and
                  role-based system we build for clients, proven on our own operations first.
                </p>
                <TagRow tags={workpilotCapabilities} />
              </div>
            </Reveal>
          </div>

          {/* ---------------- OUR TECHNOLOGY SERVICES ---------------- */}
          <div className="mt-20">
            <SectionHeading eyebrow="Our Technology Services" title="One partner, every layer of the stack." />
            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {techServices.map((s) => (
                  <div key={s.title} className="glass-dark rounded-[24px] p-6">
                    <h3 className="font-display text-lg font-medium text-background">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-background/60">{s.tagline}</p>
                    <TagRow tags={s.tags} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ---------------- GROWTH STAGES ---------------- */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="Every Stage of Growth"
              title="Technology solutions that grow with you."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {growthStages.map((g) => (
                  <div key={g.title} className="glass-dark rounded-[24px] p-6 sm:p-7">
                    <h3 className="font-display text-lg font-medium text-background">{g.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-background/70"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ---------------- WHY BLENDSKILLS + TECH STACK ---------------- */}
          <Reveal delay={0.1}>
            <div className="glass-dark mt-20 rounded-[28px] p-8 sm:p-10">
              <h2 className="display-lg max-w-2xl text-background">Why BlendSkills for Technology?</h2>
              <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {whyBlendskills.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-background/85"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-10 eyebrow text-background/60">Our Technology Stack</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {techStack.map((group) => (
                  <div key={group.group} className="rounded-[20px] border border-background/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-background/50">
                      {group.group}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-background/75">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-background/10 bg-foreground text-background">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-24 sm:px-8">
          <Reveal>
            <h2 className="display-lg max-w-xl">
              Have a problem to solve? Need a system that doesn't exist yet?
            </h2>
            <p className="mt-4 max-w-lg text-base text-background/70">
              Tell us what you're building and we'll show you what the technology behind it could
              look like.
            </p>
            <a
              href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27d%20like%20to%20discuss%20a%20custom%20software%20or%20automation%20project."
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
