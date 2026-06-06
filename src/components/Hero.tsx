const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 h-96 w-96 bg-violet-600/20 blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="space-y-6">
          <p className="text-violet-500 font-medium">Full Stack Developer</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm Rhokeeb.
          </h1>

          <p className="max-w-2xl text-zinc-400 text-lg">
            Computer Science student building modern web applications with
            React, TypeScript, Node.js, Express, and MongoDB.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition">
              View Projects
            </button>

            <button className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-zinc-500 transition">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
