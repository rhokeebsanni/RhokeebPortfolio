import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>

        <p className="text-zinc-400 mb-8 max-w-xl">
          I'm always interested in discussing projects, internships,
          collaborations, and new opportunities.
        </p>

        <div className="flex gap-6 text-2xl">
          <a href="mailto:your@email.com">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/rhokeebsanni"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
