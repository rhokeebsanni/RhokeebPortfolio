import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  /** Tints the section with the soft background to create rhythm down the page. */
  alt?: boolean;
  className?: string;
};

const Section = ({ id, children, alt = false, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-24 md:py-32 ${
        alt ? "bg-bg-soft" : "bg-bg"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
};

export default Section;
