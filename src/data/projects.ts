
import rebateDashboard from "../assets/projects/rebate-dashboard.png";
import dailyBrew from "../assets/projects/daily-brew.png";

export const projects = [
  {
    title: "Daily Brew",
    description:
      "Full-stack task management application with Google authentication and task management features.",
    image: dailyBrew,
    github: "https://github.com/rhokeebsanni/daily-brew",
    live: "http://daily-brew-kohl.vercel.app",
    technologies: ["React", "Node.js", "MongoDB"],
  },

  {
    title: "Wholesale Pricing Engine",
    description:
      "A pricing management platform featuring Google authentication, calculation history, material management, and automated rebate calculations.",
    image: rebateDashboard,
    github: "https://github.com/rhokeebsanni/wholesale-pricing-engine",
    live: "https://wholesale-pricing-engine.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Google OAuth"],
  },
];
