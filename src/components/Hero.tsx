import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#F7F3EE]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[#C8602A] font-medium mb-4">
              Hi, I'm Rhokeeb 👋
            </p>

            <p className="text-[#1C1917]/60 text-sm uppercase tracking-wider mb-6">
              Computer Science Student & Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1C1917]">
              Building Modern
              <span className="block text-[#C8602A]">
                Web Experiences
              </span>
            </h1>

            <p className="mt-8 text-[#1C1917]/70 text-lg md:text-xl leading-relaxed">
              Computer Science student focused on building scalable web
              applications using React, TypeScript, Node.js, Express, and
              MongoDB.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  px-6 py-3
                  bg-[#C8602A]
                  text-[#F7F3EE]
                  rounded-xl
                  hover:bg-[#a34e21]
                  transition
                "
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  px-6 py-3
                  border
                  border-[#C8602A]
                  text-[#C8602A]
                  rounded-xl
                  hover:bg-[#C8602A]
                  hover:text-[#F7F3EE]
                  transition
                "
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#C8602A]/10 blur-3xl" />

              <img
                src={profile}
                alt="Rhokeeb Sanni"
                className="
                  relative z-10
                  w-80
                  h-80
                  object-cover
                  rounded-3xl
                  border
                  border-[#E8DDD0]
                  shadow-2xl
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
