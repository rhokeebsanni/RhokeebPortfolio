import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiDrizzle,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRailway,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
  SiVercel,
} from "react-icons/si";

const items: { icon: IconType; label: string }[] = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiShadcnui, label: "shadcn/ui" },
  { icon: SiReact, label: "React" },
  { icon: SiPostgresql, label: "Neon Postgres" },
  { icon: SiDrizzle, label: "Drizzle" },
  { icon: SiCloudflare, label: "Cloudflare R2" },
  { icon: SiUpstash, label: "Upstash Redis" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiRailway, label: "Railway" },
];

const Marquee = () => {
  // Render the list twice so the -50% keyframe loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="relative border-y border-border bg-bg-soft py-6">
      <div
        className="flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {loop.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.label}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-text-soft transition-colors hover:text-accent"
              >
                <Icon size={22} />
                <span className="whitespace-nowrap font-medium">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
