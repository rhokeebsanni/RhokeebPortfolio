import Section from "./Section";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="mb-12">
        <p className="text-violet-500 font-medium mb-3">
          Skills & Technologies
        </p>

        <h2 className="text-4xl font-bold">My Tech Stack</h2>

        <p className="text-zinc-400 mt-4 max-w-2xl">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              p-6
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              hover:border-violet-500
              transition-all
              duration-300
            "
          >
            <h3 className="text-xl font-semibold mb-4">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    text-sm
                    px-3
                    py-1
                    rounded-full
                    bg-zinc-800
                    border
                    border-zinc-700
                    text-zinc-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
