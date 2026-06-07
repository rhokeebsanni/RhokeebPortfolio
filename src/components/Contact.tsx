import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-violet-500 font-medium mb-3">Contact</p>

          <h2 className="text-4xl font-bold">Let's Build Something Together</h2>

          <p className="text-zinc-400 mt-4 max-w-2xl">
            I'm currently open to internships, collaborations, and opportunities
            to work on interesting projects.
          </p>
        </div>

        <div className="flex gap-6 text-3xl">
          <a
            href="mailto:rhokeebsanni@gmail.com"
            className="text-zinc-400 hover:text-violet-400 transition-colors"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/rhokeebsanni"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-violet-400 transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rhokeeb-sanni"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-violet-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
