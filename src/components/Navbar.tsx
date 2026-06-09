import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-md
        bg-[#F7F3EE]/90
        border-b border-[#D4C5B5]
        shadow-lg
      "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h2 className="font-bold text-xl text-[#C8602A]">RS</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm text-[#6B5744]">
          <a href="#about" className="hover:text-[#C8602A] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#C8602A] transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#C8602A] transition-colors"
          >
            Projects
          </a>
          <a href="#contact" className="hover:text-[#C8602A] transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#6B5744] text-xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-[#F7F3EE] border-t border-[#D4C5B5]">
          <div className="flex flex-col gap-4 text-[#6B5744]">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C8602A] transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C8602A] transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C8602A] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C8602A] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
