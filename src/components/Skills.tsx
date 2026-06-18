import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills" alt>
      <SectionHeading
        eyebrow="Tech Stack"
        title="My production stack, end to end"
        description="The tools I reach for to take a SaaS from first commit to paying customers — front end, capture engine, data, auth, infra and deploy."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const GroupIcon = group.icon;
          return (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="group/card h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                    <GroupIcon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text">
                    {group.title}
                  </h3>
                  <span className="ml-auto font-mono text-xs text-muted">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="group/chip inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3.5 py-1.5 text-sm font-medium text-text-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-text"
                      >
                        <Icon
                          size={16}
                          className="text-muted transition-colors duration-300 group-hover/chip:text-accent"
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
