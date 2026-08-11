import { createFileRoute } from "@tanstack/react-router";

import {
  ImmersiveServiceCarousel,
  type ImmersiveServiceItem,
} from "../components/site/ImmersiveServiceCarousel";
import performanceMarketing from "../assets/services/performance-marketing.jpg";
import websiteAppDevelopment from "../assets/services/website-app-development.jpg";
import brandingCreativeDesign from "../assets/services/branding-creative-design.jpg";
import aiBusinessAutomation from "../assets/services/ai-business-automation.jpg";
import seoSocialMediaGrowth from "../assets/services/seo-social-media-growth.jpg";
import videoProductionContentCreation from "../assets/services/video-production-content-creation.jpg";
import performanceMarketingVideo from "../assets/services/performance-marketing.mp4";
import websiteAppDevelopmentVideo from "../assets/services/website-app-development.mp4";
import brandingCreativeDesignVideo from "../assets/services/branding-creative-design.mp4";
import aiBusinessAutomationVideo from "../assets/services/ai-business-automation.mp4";
import seoSocialMediaGrowthVideo from "../assets/services/seo-social-media-growth.mp4";
import videoProductionContentCreationVideo from "../assets/services/video-production-content-creation.mp4";

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

const services: ImmersiveServiceItem[] = [
  {
    num: "01",
    title: "Performance Marketing",
    desc: "Drive measurable growth with data-driven Meta & Google Ads campaigns. Maximize ROI, leads, and conversions through continuous optimization.",
    img: performanceMarketing,
    video: performanceMarketingVideo,
  },
  {
    num: "02",
    title: "Website & App Development",
    desc: "Build fast, secure, and scalable digital experiences. Custom websites and applications tailored to your business goals.",
    img: websiteAppDevelopment,
    video: websiteAppDevelopmentVideo,
  },
  {
    num: "03",
    title: "Branding & Creative Design",
    desc: "Create a memorable brand that stands out in the market. From identity to visuals, we craft designs that leave an impact.",
    img: brandingCreativeDesign,
    video: brandingCreativeDesignVideo,
  },
  {
    num: "04",
    title: "AI & Business Automation",
    desc: "Automate workflows and simplify daily business operations. Leverage AI-powered solutions to improve productivity and efficiency.",
    img: aiBusinessAutomation,
    video: aiBusinessAutomationVideo,
  },
  {
    num: "05",
    title: "SEO & Social Media Growth",
    desc: "Increase your online visibility and grow your digital presence. Reach the right audience with strategic SEO and social media marketing.",
    img: seoSocialMediaGrowth,
    video: seoSocialMediaGrowthVideo,
  },
  {
    num: "06",
    title: "Video Production & Content Creation",
    desc: "Produce engaging content that captures attention and drives action. From concept to final edit, we create visuals that tell your story.",
    img: videoProductionContentCreation,
    video: videoProductionContentCreationVideo,
  },
];

function ServicesPage() {
  return <ImmersiveServiceCarousel items={services} />;
}
