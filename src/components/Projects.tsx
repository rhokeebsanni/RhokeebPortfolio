import { motion } from "framer-motion";
import {
  LuArrowUpRight,
  LuCheck,
  LuExternalLink,
  LuGithub,
  LuStar,
} from "react-icons/lu";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Section id="projects" alt>
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects I've designed & shipped"
        description="A couple of products I built end to end — from the first wireframe to the deployed URL."
      />

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={project.title}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                {/* Visual */}
                <div className={reversed ? "lg:order-2" : ""}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-accent/5"
                  >
                    {/* faux browser chrome */}
                    <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-3 truncate rounded-md bg-bg px-3 py-0.5 font-mono text-[0.7rem] text-muted">
                        {project.live.replace(/^https?:\/\//, "")}
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-full bg-surface/95 px-5 py-2.5 text-sm font-semibold text-text shadow-lg backdrop-blur">
                          <LuExternalLink size={16} />
                          Visit live site
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-border-strong" />
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        <LuStar size={11} />
                        Featured
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-text md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-medium text-accent">
                    {project.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-text-soft">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-text-soft"
                      >
                        <LuCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong"
                    >
                      Live demo
                      <LuArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                    >
                      <LuGithub size={16} />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* More on GitHub */}
      <Reveal>
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border-strong bg-surface/50 p-8 text-center">
          <p className="text-text-soft">
            More experiments, sandboxes and works-in-progress live on my GitHub.
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/rhokeebsanni"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            <LuGithub size={18} />
            Browse all repositories
            <LuArrowUpRight size={16} />
          </motion.a>
        </div>
      </Reveal>
    </Section>
  );
};

export default Projects;
