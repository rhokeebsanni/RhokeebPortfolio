type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="py-32">
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section;
