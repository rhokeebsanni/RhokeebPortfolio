import Section from "./Section";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

const Skills = () => {
  return (
    <Section id="skills">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
