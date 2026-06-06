import Section from "./Section.tsx";

const About = () => {
  return (
    <Section id="about">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <p className="text-zinc-400 max-w-3xl text-lg leading-8">
        I'm a Computer Science student passionate about building modern web
        applications and solving real-world problems. I enjoy working with
        React, TypeScript, Node.js, Express and MongoDB.
      </p>
    </Section>
  );
};

export default About;
