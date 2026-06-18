import { LuBriefcase, LuGraduationCap, LuRocket } from "react-icons/lu";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { timeline } from "../data/experience";

const kindIcon = {
  education: LuGraduationCap,
  build: LuRocket,
  learning: LuBriefcase,
};

const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Journey"
        title="The path so far"
        description="Where I am, what I've shipped, and how I got here — most recent first."
      />

      <div className="relative">
        {/* Vertical rail */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border-strong to-transparent md:left-[23px]" />

        <div className="space-y-8">
          {timeline.map((entry, i) => {
            const Icon = kindIcon[entry.kind];
            return (
              <Reveal key={entry.title} delay={i * 0.05} from="left">
                <div className="relative flex gap-5 md:gap-7">
                  <div className="relative z-10 shrink-0">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-accent shadow-sm md:h-12 md:w-12">
                      <Icon size={18} />
                    </span>
                  </div>

                  <div className="group flex-1 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-text">
                        {entry.title}
                      </h3>
                      <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {entry.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-soft">
                      {entry.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-bg px-2.5 py-0.5 text-xs text-text-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
