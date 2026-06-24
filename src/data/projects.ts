import type { Project } from "../types/project";
import rebateDashboard from "../assets/projects/rebate-dashboard.png";
import dailyBrew from "../assets/projects/daily-brew.png";

export const projects: Project[] = [
  {
    title: "SnapSaas",
    tagline: "URL → launch-ready marketing screenshot, in seconds",
    description:
      "A SaaS tool that turns any live website URL into a polished marketing asset. Paste a URL, pick a device frame and style preset, and get a production-ready screenshot — with animated GIF export, 3D transforms, film grain, and a BullMQ worker queue for concurrent jobs.",
    github: "https://github.com/rhokeebsanni/SnapSaas",
    live: "https://snapsaas.vercel.app",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Playwright",
      "BullMQ",
      "Neon Postgres",
      "Drizzle ORM",
      "Better Auth",
      "Tailwind CSS v4",
      "Upstash Redis",
    ],
    highlights: [
      "Headless Playwright browser captures any live URL at exact viewport sizes",
      "Animated GIF export via multi-frame WAAPI animation engine",
      "3D rotate + shadow + film-grain/vignette post-processing pipeline",
      "BullMQ + Redis worker queue handles concurrent capture jobs",
      "Better Auth with Google & GitHub OAuth, rate-limited with Upstash",
    ],
    year: "2026",
    featured: true,
  },
  {
    title: "Wholesale Pricing Engine",
    tagline: "Automated B2B pricing & rebates",
    description:
      "A pricing management platform that replaces error-prone spreadsheets — Google sign-in, material management, saved calculation history and automated rebate calculations in one clean dashboard.",
    image: rebateDashboard,
    github: "https://github.com/rhokeebsanni/wholesale-pricing-engine",
    live: "https://wholesale-pricing-engine.vercel.app",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Google OAuth"],
    highlights: [
      "Google OAuth authentication & protected routes",
      "Automated rebate & margin calculations",
      "Persistent calculation history per user",
    ],
    year: "2025",
    featured: true,
  },
  {
    title: "Daily Brew",
    tagline: "Full-stack task manager",
    description:
      "A focused task-management app with Google authentication and a distraction-free interface — my first end-to-end product, designed, built and deployed solo.",
    image: dailyBrew,
    github: "https://github.com/rhokeebsanni/daily-brew",
    live: "http://daily-brew-kohl.vercel.app",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Google authentication flow",
      "Create, track & complete tasks",
      "Responsive, minimal UI",
    ],
    year: "2025",
    featured: true,
  },
];
