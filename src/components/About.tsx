import {
  LuGraduationCap,
  LuMapPin,
  LuRocket,
  LuSparkles,
  LuCode,
  LuGauge,
  LuLayoutDashboard,
  LuUsers,
} from "react-icons/lu";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const facts = [
  { icon: LuGraduationCap, label: "Computer Science student" },
  { icon: LuMapPin, label: "Nigeria · open to remote" },
  { icon: LuRocket, label: "Full-stack: Next.js → Postgres → R2" },
  { icon: LuSparkles, label: "Currently shipping a SaaS side project" },
];

const highlights = [
  {
    icon: LuCode,
    title: "Clean, maintainable code",
    body: "Typed, well-structured components and APIs I'd be happy to hand to a teammate.",
  },
  {
    icon: LuLayoutDashboard,
    title: "An eye for UI",
    body: "I sweat spacing, motion and contrast until an interface feels effortless.",
  },
  {
    icon: LuGauge,
    title: "Fast learner",
    body: "Comfortable picking up new tools quickly and shipping with them under deadline.",
  },
  {
    icon: LuUsers,
    title: "Built to collaborate",
    body: "Clear communication, readable PRs, and code reviewed with the next dev in mind.",
  },
];

const About = () => {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Turning curiosity into things people can actually use"
        description="I'm a developer who cares as much about how something is built as how it feels to use."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Narrative + facts */}
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-text-soft">
              I'm a Computer Science student and full-stack developer who fell in
              love with building for the web — that moment an idea turns into
              something real you can click, share and ship. These days most of my
              time goes into the{" "}
              <span className="font-medium text-text">
                Next.js, TypeScript, Postgres and Drizzle
              </span>{" "}
              stack.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-text-soft">
              I like the full arc of a product: designing a clean interface,
              wiring up the API behind it, and polishing the small details until
              the whole thing feels solid. Right now I'm building SaaS-grade apps
              end to end — auth, background queues, file storage and payments —
              and writing code that scales past the first demo.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <Reveal key={fact.label} delay={0.15 + i * 0.06}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-medium text-text-soft">
                      {fact.label}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={i * 0.08} from="up">
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
                    <Icon size={20} />
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold text-text">
                    {h.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-soft">
                    {h.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default About;
