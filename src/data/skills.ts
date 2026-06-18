import type { IconType } from "react-icons";
import {
  SiBetterauth,
  SiCloudflare,
  SiDrizzle,
  SiFlydotio,
  SiGithub,
  SiGoogle,
  SiLemonsqueezy,
  SiNextdotjs,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
  SiVercel,
} from "react-icons/si";
import {
  LuCamera,
  LuDatabase,
  LuImage,
  LuLayoutDashboard,
  LuRocket,
  LuServer,
  LuShieldCheck,
  LuWandSparkles,
  LuWorkflow,
} from "react-icons/lu";

export type Skill = { name: string; icon: IconType };

export type SkillGroup = {
  title: string;
  icon: IconType;
  skills: Skill[];
};

/**
 * Grouped by architectural role rather than language — it reads like a real
 * production system, which is the point. Icons fall back to a Lucide glyph
 * where a tool has no brand mark (Playwright, Sharp, BullMQ).
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: LuLayoutDashboard,
    skills: [
      { name: "Next.js 15", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    title: "Engine",
    icon: LuWandSparkles,
    skills: [
      { name: "Playwright", icon: LuCamera },
      { name: "Sharp", icon: LuImage },
    ],
  },
  {
    title: "Database",
    icon: LuDatabase,
    skills: [
      { name: "Neon Postgres", icon: SiPostgresql },
      { name: "Drizzle ORM", icon: SiDrizzle },
    ],
  },
  {
    title: "Auth",
    icon: LuShieldCheck,
    skills: [
      { name: "Better Auth", icon: SiBetterauth },
      { name: "Google OAuth", icon: SiGoogle },
      { name: "GitHub OAuth", icon: SiGithub },
    ],
  },
  {
    title: "Storage & Queue",
    icon: LuServer,
    skills: [
      { name: "Cloudflare R2", icon: SiCloudflare },
      { name: "BullMQ", icon: LuWorkflow },
      { name: "Upstash Redis", icon: SiUpstash },
    ],
  },
  {
    title: "Deploy & Payments",
    icon: LuRocket,
    skills: [
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Fly.io", icon: SiFlydotio },
      { name: "Lemon Squeezy", icon: SiLemonsqueezy },
    ],
  },
];
