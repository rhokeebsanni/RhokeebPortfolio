import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-violet-500 font-medium mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Building Modern
            <span className="block text-violet-500">Web Experiences</span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg md:text-xl leading-relaxed">
            Computer Science student focused on building scalable web
            applications using React, TypeScript, Node.js and MongoDB.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
      px-6 py-3
      bg-violet-600
      rounded-xl
      hover:bg-violet-700
      transition
    "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
      px-6 py-3
      border
      border-zinc-700
      rounded-xl
      hover:border-violet-500
      transition
    "
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
