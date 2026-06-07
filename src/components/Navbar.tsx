const Navbar = () => {
  return (
    <nav
      className="
    fixed
    top-0
    left-0
    right-0
    z-50
    backdrop-blur-md
    bg-black/50
    border-b
    border-zinc-800
    shadow-lg
    "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h2 className="font-bold text-xl text-violet-500">RS</h2>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-violet-400 transition-colors">
            About
          </a>

          <a href="#skills" className="hover:text-violet-400 transition-colors">
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-violet-400 transition-colors"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-violet-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
