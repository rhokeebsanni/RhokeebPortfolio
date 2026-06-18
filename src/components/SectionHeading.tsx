import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/** Consistent eyebrow + title + lead block used at the top of each section. */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  const centered = align === "center";
  return (
    <div className={`mb-14 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-text-soft sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
