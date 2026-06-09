import Section from "./Section";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  { title: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  { title: "Database", skills: ["MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "Vercel"] },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="mb-12">
        <p className="text-[#C8602A] font-medium mb-3">Skills & Technologies</p>
        <h2 className="text-4xl font-bold text-[#1C1917]">My Tech Stack</h2>
        <p className="text-[#6B5744] mt-4 max-w-2xl">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              p-6 rounded-2xl
              border border-[#D4C5B5] bg-[#E8DDD0]
              hover:border-[#C8602A] transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-[#1C1917]">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    text-sm px-3 py-1 rounded-full
                    bg-[#F7F3EE] border border-[#D4C5B5] text-[#6B5744]
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
