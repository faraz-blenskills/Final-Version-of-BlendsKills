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
import performanceMarketingBg from "../assets/services/modal-bg/01-performance-marketing.webp";
import websiteAppDevelopmentBg from "../assets/services/modal-bg/02-website-app-development.webp";
import brandingCreativeDesignBg from "../assets/services/modal-bg/03-branding-creative-design.webp";
import aiBusinessAutomationBg from "../assets/services/modal-bg/04-ai-business-automation.webp";
import seoSocialMediaGrowthBg from "../assets/services/modal-bg/05-seo-social-media-growth.webp";
import videoProductionContentCreationBg from "../assets/services/modal-bg/06-video-production-content-creation.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services: Performance Marketing, Web & AI | BlendSkills" },
      {
        name: "description",
        content:
          "Digital solutions that drive real results: performance marketing, website & app development, branding, AI automation, SEO, social media and video production.",
      },
      { property: "og:title", content: "Our Services | BlendSkills" },
      {
        property: "og:description",
        content:
          "Digital solutions that drive real results: performance marketing, development, branding, AI automation, SEO and content.",
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
    desc: "Turn advertising into measurable growth with data-driven Meta, Google & LinkedIn campaigns, built for leads and ROI, not just clicks.",
    provide:
      "We manage the complete performance marketing journey: audience research, campaign strategy, lead generation, conversion optimization, retargeting, and scaling, across search, social, video, and marketplace platforms. Every campaign is measured against acquisition cost, conversion rate, ROAS, and ROI, so budget goes toward what's actually working.",
    capabilities: [
      "Performance Advertising",
      "Lead Generation",
      "Sales Funnels",
      "CRO",
      "Landing Page Optimization",
      "Retargeting",
      "E-commerce Advertising",
      "ROAS & ROI Optimization",
    ],
    img: performanceMarketing,
    video: performanceMarketingVideo,
    modalBg: performanceMarketingBg,
  },
  {
    num: "02",
    title: "Website & App Development",
    desc: "Fast, responsive websites and mobile apps engineered to represent your brand, convert visitors, and run your business.",
    provide:
      "We design and build corporate websites, e-commerce platforms, booking systems, and custom web portals, alongside native Android, iOS, and cross-platform mobile apps. Every build is judged on responsiveness, performance, search visibility, and conversion, connected to the APIs, databases, and cloud services your business already runs on.",
    capabilities: [
      "Corporate & Business Websites",
      "E-commerce",
      "Web Applications",
      "Custom Portals & CMS",
      "Android & iOS Apps",
      "Cross-platform Apps",
      "Booking Systems",
      "Enterprise Mobility",
    ],
    img: websiteAppDevelopment,
    video: websiteAppDevelopmentVideo,
    modalBg: websiteAppDevelopmentBg,
    secondaryCta: { label: "Visit Our Portfolio", to: "/portfolio" },
  },
  {
    num: "03",
    title: "Branding & Creative Design",
    desc: "Build a memorable brand through strategic identity, compelling visual design, and a consistent creative language across every touchpoint.",
    provide:
      "From brand identity and logo design to UI/UX, packaging, and presentation design, we create a cohesive visual system rather than one-off assets. Every piece, digital or print, is built to strengthen recognition, communication, and how customers perceive your brand.",
    capabilities: [
      "Brand Identity",
      "Logo Design",
      "Graphic Design",
      "UI/UX Design",
      "Packaging",
      "Presentation Design",
      "Marketing Collateral",
      "Social Media Creatives",
    ],
    img: brandingCreativeDesign,
    video: brandingCreativeDesignVideo,
    modalBg: brandingCreativeDesignBg,
  },
  {
    num: "04",
    title: "AI & Business Automation",
    desc: "Make your business smarter with AI-powered automation, intelligent assistants, predictive systems, and AI-driven workflows.",
    provide:
      "We build AI chatbots, conversational AI, generative AI integrations, machine learning solutions, predictive analytics, and computer vision systems, then connect them into your website, marketing, and support workflows so AI reduces real repetitive work instead of sitting as a standalone gimmick.",
    capabilities: [
      "AI Chatbots",
      "Conversational AI",
      "Generative AI",
      "Predictive Analytics",
      "Computer Vision & OCR",
      "AI Business Assistants",
      "AI Marketing Automation",
    ],
    img: aiBusinessAutomation,
    video: aiBusinessAutomationVideo,
    modalBg: aiBusinessAutomationBg,
  },
  {
    num: "05",
    title: "SEO & Social Media Growth",
    desc: "Grow your digital presence through search, content, and social: strategic organic growth backed by data, not guesswork.",
    provide:
      "Our SEO, local SEO, social media marketing, content marketing, email and WhatsApp marketing services are built around one goal: helping the right audience discover, trust, and choose your brand. We pair organic growth with analytics and continuous optimization to compound results over time.",
    capabilities: [
      "SEO & Local SEO",
      "Social Media Marketing",
      "Content Marketing",
      "Email & WhatsApp Marketing",
      "Influencer Marketing",
      "Online Reputation Management",
      "Marketing Analytics",
    ],
    img: seoSocialMediaGrowth,
    video: seoSocialMediaGrowthVideo,
    modalBg: seoSocialMediaGrowthBg,
  },
  {
    num: "06",
    title: "Video Production & Content Creation",
    desc: "Produce engaging video and visual content that captures attention and drives action, from concept to final edit.",
    provide:
      "We handle video production, corporate films, product photography, commercial and drone shoots, and motion graphics: creative work built to tell your story consistently across social, web, and campaign content.",
    capabilities: [
      "Video Production",
      "Corporate Films",
      "Product Photography",
      "Commercial Shoots",
      "Drone Shoots",
      "Motion Graphics",
      "Social Media Content",
    ],
    img: videoProductionContentCreation,
    video: videoProductionContentCreationVideo,
    modalBg: videoProductionContentCreationBg,
  },
];

function ServicesPage() {
  return <ImmersiveServiceCarousel items={services} />;
}
