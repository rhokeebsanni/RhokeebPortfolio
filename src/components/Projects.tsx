import Section from "./Section";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Section id="projects">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

            <p className="text-zinc-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 rounded-full bg-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
