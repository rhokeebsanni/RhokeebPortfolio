import type { Project } from "../types/project";
import rebateDashboard from "../assets/projects/rebate-dashboard.png";
import dailyBrew from "../assets/projects/daily-brew.png";

export const projects: Project[] = [
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
