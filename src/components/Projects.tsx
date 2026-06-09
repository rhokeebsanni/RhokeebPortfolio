import Section from "./Section";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="mb-12">
        <p className="text-[#C8602A] mb-3">Featured Work</p>
        <h2 className="text-4xl font-bold text-[#1C1917]">
          Projects I've Built
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group overflow-hidden p-6 rounded-2xl
              border border-[#D4C5B5] bg-[#E8DDD0]
              hover:border-[#C8602A] hover:-translate-y-2
              transition-all duration-300
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full h-56 object-cover rounded-xl mb-6
                border border-[#D4C5B5]
                transition-transform duration-500 group-hover:scale-105
              "
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#1C1917]">
              {project.title}
            </h3>
            <p className="text-[#6B5744] mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-sm px-3 py-1 rounded-full
                    bg-[#F7F3EE] border border-[#D4C5B5] text-[#6B5744]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6 text-sm font-medium">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#C8602A] hover:text-[#A0451A]"
              >
                View Code →
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-[#C8602A] hover:text-[#A0451A]"
              >
                Live Site →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
