import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";
import { SmoothScroll } from "../components/site/SmoothScroll";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __lenis?: { scrollTo: (target: number | string, options?: { immediate?: boolean }) => void };
  }
}

// Lenis owns the page's effective scroll position independently of the
// native scrollTop, so TanStack Router's built-in scrollRestoration alone
// can't reset it: navigating to a new page kept whatever scroll position
// (e.g. the footer) the previous page was left at. Reset both on every
// route change. Kept fully separate from the pixel-tracking hook below.
function useScrollResetOnNavigate() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", (event) => {
      if (!event.pathChanged) return;
      window.__lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    });
    return unsubscribe;
  }, [router]);
}

// The Meta Pixel base code only fires a PageView for the first document
// load. This app navigates client-side after that (no full page reload),
// so without this, Meta only ever sees a single PageView no matter how
// many pages a visitor browses. Fire one on every resolved route change.
function useMetaPixelPageViews() {
  const router = useRouter();

  useEffect(() => {
    let isFirstResolve = true;
    const unsubscribe = router.subscribe("onResolved", (event) => {
      if (isFirstResolve) {
        isFirstResolve = false;
        return;
      }
      if (!event.pathChanged) return;
      window.fbq?.("track", "PageView");
    });
    return unsubscribe;
  }, [router]);
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-xl">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "BlendSkills Pvt Ltd" },
      { name: "facebook-domain-verification", content: "ieibd4cbswdr8jj2j1cgz62l9cyxzl" },
      { property: "og:site_name", content: "BlendSkills" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@400;450;500;700&display=swap",
      },
      { rel: "icon", href: "/favicon-logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon-logo.png" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BlendSkills Pvt Ltd",
          description:
            "Digital marketing and web development company in Pune and Gaya. SEO, social media, Google Ads, branding, website and app development.",
          email: "info@blendskills.co.in",
          telephone: "+91-9175789966",
          address: [
            { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
            { "@type": "PostalAddress", addressLocality: "Gaya", addressCountry: "IN" },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const META_PIXEL_ID = "1699255421302227";
const GTM_ID = "GTM-NF5VLG52";

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — kept as high in <head> as possible, per Google's install guide */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
        <HeadContent />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) — immediately after the opening <body> tag */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useMetaPixelPageViews();
  useScrollResetOnNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <SmoothScroll>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </QueryClientProvider>
  );
}
