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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            className="
            p-5
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            hover:border-violet-500
            transition
          "
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
