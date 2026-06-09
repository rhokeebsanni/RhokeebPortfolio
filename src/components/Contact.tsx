import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#F7F3EE]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#C8602A] font-medium mb-3">Contact</p>
          <h2 className="text-4xl font-bold text-[#1C1917]">
            Let's Build Something Together
          </h2>
          <p className="text-[#6B5744] mt-4 max-w-2xl">
            I'm currently open to internships, collaborations, and opportunities
            to work on interesting projects.
          </p>
        </div>

        <div className="flex gap-6 text-3xl">
          <a
            href="mailto:rhokeebsanni@gmail.com"
            className="text-[#8C7260] hover:text-[#C8602A] transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/rhokeebsanni"
            target="_blank"
            rel="noreferrer"
            className="text-[#8C7260] hover:text-[#C8602A] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rhokeeb-sanni"
            target="_blank"
            rel="noreferrer"
            className="text-[#8C7260] hover:text-[#C8602A] transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
