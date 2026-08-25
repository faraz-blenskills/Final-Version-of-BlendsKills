import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Presentation } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/performance-marketing-results")({
  head: () => ({
    meta: [
      { title: "Performance Marketing Results | BlendSkills" },
      {
        name: "description",
        content:
          "Real revenue and Meta advertising results delivered for a BlendSkills performance marketing client: month-by-month growth, spend efficiency, and funnel metrics.",
      },
      { property: "og:title", content: "Performance Marketing Results | BlendSkills" },
      {
        property: "og:description",
        content: "Real revenue and Meta advertising results delivered for a BlendSkills performance marketing client.",
      },
      { property: "og:url", content: "/performance-marketing-results" },
    ],
    links: [{ rel: "canonical", href: "/performance-marketing-results" }],
  }),
  component: PerformanceMarketingResultsPage,
});

const COLOR_LINE = "#d95926";
const COLOR_BEFORE = "#3987e5";
const COLOR_AFTER = "#d95926";
const SURFACE = "#141413";
const DECK_PATH = "/downloads/BlendSkills-Performance-Marketing-Capabilities.pptx";

const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);

function useDeckViewerUrl() {
  const [url, setUrl] = useState(DECK_PATH);
  useEffect(() => {
    if (LOCAL_HOSTNAMES.has(window.location.hostname)) {
      // Microsoft's viewer can only fetch a publicly reachable URL — it can never
      // reach a local dev server, so fall back to opening the file directly.
      setUrl(DECK_PATH);
      return;
    }
    const fileUrl = `${window.location.origin}${DECK_PATH}`;
    setUrl(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(fileUrl)}`);
  }, []);
  return url;
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const revenueData = [
  { month: "Jan 25", revenue: 1500000 },
  { month: "Feb 25", revenue: 4800000 },
  { month: "Mar 25", revenue: 11600000 },
  { month: "Apr 25", revenue: 19800000 },
  { month: "May 25", revenue: 18700000 },
  { month: "Jun 25", revenue: 29400000 },
  { month: "Jul 25", revenue: 44200000 },
  { month: "Aug 25", revenue: 58600000 },
  { month: "Sep 25", revenue: 68900000 },
  { month: "Oct 25", revenue: 65300000 },
  { month: "Nov 25", revenue: 82600000 },
  { month: "Dec 25", revenue: 97800000 },
  { month: "Jan 26", revenue: 118400000 },
  { month: "Feb 26", revenue: 136900000 },
  { month: "Mar 26", revenue: 162300000 },
  { month: "Apr 26", revenue: 183700000 },
  { month: "May 26", revenue: 219800000 },
  { month: "Jun 26", revenue: 251200000 },
  { month: "Jul 26", revenue: 291600000 },
  { month: "Aug 26", revenue: 333000000 },
];

const prePostData = [
  { period: "Before BlendSkills", value: 34000000, fill: COLOR_BEFORE },
  { period: "After BlendSkills", value: 333000000, fill: COLOR_AFTER },
];

const headlineStats = [
  { value: "9.8×", label: "Cumulative revenue vs. the pre-onboarding baseline" },
  { value: "₹33.3 Cr", label: "Total revenue generated across FY 2025 to FY 2026" },
  { value: "9.26%", label: "Meta link click-through rate in the latest period" },
  { value: "1,250+", label: "Purchases attributed to Instagram, FY 2025 to FY 2026" },
];

const metaStats = [
  { label: "Meta ad spend", value: "₹4,565", sub: "1–17 Aug" },
  { label: "Reach", value: "13,849", sub: "unique people" },
  { label: "Impressions", value: "60,597", sub: "ad views" },
  { label: "Link clicks", value: "5,614", sub: "to the store" },
  { label: "Link CTR", value: "9.26%", sub: "click-through rate" },
  { label: "Add to carts", value: "161", sub: "in 17 days" },
];

const formatCr = (n: number) => `₹${(n / 1e7).toFixed(1)}\u00A0Cr`;

function RevenueTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-dark rounded-2xl px-4 py-3">
      <p className="text-xs text-background/60">{label}</p>
      <p className="mt-1 text-base font-semibold text-background">{formatCr(payload[0]!.value)}</p>
    </div>
  );
}

function BarTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value: number; payload: { period: string } }>;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-dark rounded-2xl px-4 py-3">
      <p className="text-xs text-background/60">{payload[0]!.payload.period}</p>
      <p className="mt-1 text-base font-semibold text-background">{formatCr(payload[0]!.value)}</p>
    </div>
  );
}

function RevenueDot(props: {
  cx?: number;
  cy?: number;
  payload?: { month: string; revenue: number };
}) {
  const { cx, cy, payload } = props;
  if (cx === undefined || cy === undefined || !payload) return null;
  const isEndpoint = payload.month === revenueData[revenueData.length - 1]!.month;
  return (
    <g>
      <circle cx={cx} cy={cy} r={4} fill={COLOR_LINE} stroke={SURFACE} strokeWidth={2} />
      {isEndpoint && (
        <text
          x={cx}
          y={cy - 16}
          textAnchor="middle"
          fontSize={12}
          fontWeight={600}
          fill="var(--color-background)"
        >
          {formatCr(payload.revenue)}
        </text>
      )}
    </g>
  );
}

function PerformanceMarketingResultsPage() {
  const deckViewerUrl = useDeckViewerUrl();
  const revenueChart = useInView();
  const barChart = useInView();

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
              / Performance Marketing Results
            </p>
            <h1 className="display-xl mt-6 max-w-3xl text-background">
              Performance Marketing, <span className="animate-shimmer-text">By The Numbers</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70">
              This is a real engagement from our client roster, with the brand name held back by
              request. It's the kind of trajectory structured social media management, content
              strategy and Meta advertising can produce in a matter of months. Numbers like these
              are what we aim for with every performance marketing client.
            </p>
            <a
              href={deckViewerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-8"
            >
              <Presentation className="size-4" /> View Deck
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-dark mt-14 inline-flex flex-col items-start gap-2 rounded-[32px] px-8 py-7 sm:px-10">
              <span className="animate-shimmer-text font-display text-[3.5rem] font-medium leading-none sm:text-[4.5rem]">
                9.8×
              </span>
              <span className="text-sm text-background/70">
                cumulative revenue vs. before onboarding
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {headlineStats.map((s) => (
                <div key={s.label} className="glass-dark rounded-[20px] p-5">
                  <p className="font-display text-2xl font-medium text-background">{s.value}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-background/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16">
              <p className="eyebrow text-background/60">Revenue Trend</p>
              <h2 className="display-lg mt-3 max-w-xl text-background">
                Cumulative revenue, FY 2025 to FY 2026
              </h2>
              <div className="glass-dark mt-8 rounded-[28px] p-5 sm:p-8">
                <div ref={revenueChart.ref} className="h-[320px] w-full">
                  {revenueChart.inView && (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData} margin={{ top: 24, right: 32, left: 0, bottom: 0 }}>
                        <CartesianGrid
                          vertical={false}
                          stroke="rgba(243,240,238,0.08)"
                          strokeDasharray="0"
                        />
                        <XAxis
                          dataKey="month"
                          tick={{ fill: "rgba(243,240,238,0.5)", fontSize: 11 }}
                          tickLine={false}
                          axisLine={{ stroke: "rgba(243,240,238,0.15)" }}
                          interval="preserveStartEnd"
                        />
                        <YAxis
                          tick={{ fill: "rgba(243,240,238,0.5)", fontSize: 12 }}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(v: number) => (v === 0 ? "₹0" : `₹${Math.round(v / 1e7)} Cr`)}
                          width={64}
                        />
                        <Tooltip content={<RevenueTooltip />} cursor={{ stroke: "rgba(243,240,238,0.2)" }} />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke={COLOR_LINE}
                          strokeWidth={2}
                          dot={<RevenueDot />}
                          activeDot={{ r: 5, fill: COLOR_LINE, stroke: SURFACE, strokeWidth: 2 }}
                          isAnimationActive
                          animationDuration={1600}
                          animationEasing="ease-out"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
                <p className="mt-4 text-xs text-background/50">
                  Figures reflect cumulative revenue managed across the full FY 2025 to FY 2026
                  window; August 2026 is the current, still-in-progress month.
                </p>
                <details className="mt-4 text-sm text-background/70">
                  <summary className="cursor-hover-target cursor-pointer text-background/80 hover:text-background">
                    View monthly figures as a table
                  </summary>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[280px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-background/15 text-xs uppercase tracking-wide text-background/50">
                          <th className="py-2 pr-4 font-medium">Month</th>
                          <th className="py-2 font-medium">Cumulative revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {revenueData.map((d) => (
                          <tr key={d.month} className="border-b border-background/10">
                            <td className="py-2 pr-4">{d.month}</td>
                            <td className="py-2 tabular-nums">{formatCr(d.revenue)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16">
              <p className="eyebrow text-background/60">Before &amp; After</p>
              <h2 className="display-lg mt-3 max-w-xl text-background">
                What structured management changed
              </h2>
              <div className="glass-dark mt-8 rounded-[28px] p-5 sm:p-8">
                <div ref={barChart.ref} className="h-[280px] w-full">
                  {barChart.inView && (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={prePostData} margin={{ top: 24, right: 12, left: 0, bottom: 0 }}>
                        <CartesianGrid vertical={false} stroke="rgba(243,240,238,0.08)" />
                        <XAxis
                          dataKey="period"
                          tick={{ fill: "rgba(243,240,238,0.5)", fontSize: 12 }}
                          tickLine={false}
                          axisLine={{ stroke: "rgba(243,240,238,0.15)" }}
                        />
                        <YAxis
                          tick={{ fill: "rgba(243,240,238,0.5)", fontSize: 12 }}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(v: number) => (v === 0 ? "₹0" : `₹${Math.round(v / 1e7)} Cr`)}
                          width={64}
                        />
                        <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(243,240,238,0.05)" }} />
                        <Bar
                          dataKey="value"
                          radius={[4, 4, 0, 0]}
                          maxBarSize={24}
                          isAnimationActive
                          animationDuration={1100}
                          animationEasing="ease-out"
                        >
                          {prePostData.map((entry) => (
                            <Cell key={entry.period} fill={entry.fill} />
                          ))}
                          <LabelList
                            dataKey="value"
                            position="top"
                            formatter={(v: number) => formatCr(v)}
                            fill="var(--color-background)"
                            fontSize={13}
                            fontWeight={600}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-center gap-6 text-xs text-background/70">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-[2px]"
                      style={{ background: COLOR_BEFORE }}
                    />
                    Before BlendSkills (organic baseline)
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="size-2.5 rounded-[2px]" style={{ background: COLOR_AFTER }} />
                    After BlendSkills (managed, FY 2025 to FY 2026)
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16">
              <p className="eyebrow text-background/60">Meta Performance Snapshot</p>
              <h2 className="display-lg mt-3 max-w-xl text-background">1–17 August 2026</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {metaStats.map((s) => (
                  <div key={s.label} className="glass-dark rounded-[20px] p-5">
                    <p className="font-display text-3xl font-medium text-background">{s.value}</p>
                    <p className="mt-1.5 text-sm text-background/70">{s.label}</p>
                    <p className="text-xs text-background/45">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-dark mt-16 rounded-[28px] p-8 sm:p-10">
              <h2 className="display-lg max-w-2xl text-background">The story behind the numbers</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/70">
                Before this client came to us, a comparable period generated around ₹3.4 Cr,
                mostly from organic reach. Once we took over social media management, content
                strategy and Meta advertising, cumulative revenue across FY 2025 to FY 2026 grew to
                ₹33.3 Cr, a 9.8× increase, with Instagram alone contributing over 1,250 attributed
                purchases across that window. In the most recent 17-day snapshot, Meta advertising
                reached nearly 14,000 people and drove over 5,600 link clicks at a 9.26%
                click-through rate, all from a total Meta spend of about ₹4.6K. Results like this
                are why we treat performance marketing as a system to build, not a budget to
                spend.
              </p>
              <p className="mt-4 text-xs text-background/40">
                GA4 and Meta use different attribution methodologies, so figures above are shown
                separately by source and shouldn't be added together or treated as total store
                revenue.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-background/10 bg-foreground text-background">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-24 sm:px-8">
          <Reveal>
            <h2 className="display-lg max-w-xl">Want results like these for your brand?</h2>
            <p className="mt-4 max-w-lg text-base text-background/70">
              Tell us about your business and we'll show you what a structured performance
              marketing engagement could look like.
            </p>
            <a
              href="https://wa.me/919175789966?text=Hi%20BlendSkills!%20I%27d%20like%20to%20discuss%20performance%20marketing%20for%20my%20business."
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
