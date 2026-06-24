export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
  kind: "education" | "build" | "learning";
};

/**
 * Anchored to the real projects in this portfolio. Dates and the school name
 * are intentionally easy to swap — update them to match your record.
 */
export const timeline: TimelineEntry[] = [
  {
    period: "2026 — Present",
    title: "Open to internships & junior roles",
    org: "Looking for a team to grow with",
    description:
      "Actively seeking frontend / full-stack opportunities where I can contribute to a real product, learn from senior engineers, and ship work that matters.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    kind: "learning",
  },
  {
    period: "2026",
    title: "Built SnapSaas",
    org: "Self-directed SaaS product",
    description:
      "Designed and shipped a full-stack SaaS that converts any website URL into a polished marketing screenshot. Built a Playwright capture pipeline, BullMQ worker queue, animated GIF export engine, and a Next.js editor with 3D transforms and post-processing effects.",
    tags: ["Next.js", "Playwright", "BullMQ", "Postgres", "Better Auth"],
    kind: "build",
  },
  {
    period: "2025",
    title: "Built the Wholesale Pricing Engine",
    org: "Self-directed product",
    description:
      "Designed and built a pricing platform with Google OAuth, material management, calculation history and automated rebate logic — front to back.",
    tags: ["React", "Node.js", "MongoDB", "OAuth"],
    kind: "build",
  },
  {
    period: "2025",
    title: "Shipped Daily Brew",
    org: "Self-directed product",
    description:
      "Created a full-stack task manager with Google authentication and a clean, focused UI — my first end-to-end deployed application.",
    tags: ["React", "Express", "MongoDB"],
    kind: "build",
  },
  {
    period: "2024",
    title: "Went all-in on full-stack development",
    org: "Self-taught",
    description:
      "Moved beyond tutorials into building real projects — learning the MERN stack, REST API design, authentication and Git-based workflows.",
    tags: ["JavaScript", "TypeScript", "REST APIs"],
    kind: "learning",
  },
  {
    period: "2023 — Present",
    title: "B.Sc. Computer Science",
    org: "University",
    description:
      "Building strong fundamentals in data structures, algorithms, databases and software engineering principles.",
    tags: ["Algorithms", "Databases", "Software Eng."],
    kind: "education",
  },
];
