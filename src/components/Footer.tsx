import { LuArrowUp, LuHeart } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display text-xl font-bold text-text"
            >
              Rhokeeb<span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-text-soft">
              Full stack developer building fast, modern web apps. Currently open
              to internships and junior roles.
            </p>
            <div className="mt-4 flex justify-center gap-2 md:justify-start">
              <a
                href="https://github.com/rhokeebsanni"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border text-text-soft transition-colors hover:border-accent hover:text-accent"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rhokeeb-sanni"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border text-text-soft transition-colors hover:border-accent hover:text-accent"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <nav className="flex flex-col items-center gap-2.5 md:items-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Navigate
            </span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-soft transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-muted">
            © {year} Rhokeeb Sanni. Built with React, Tailwind &amp; a lot of
            <LuHeart size={13} className="text-accent" />
          </p>
          <a
            href="#top"
            className="focus-ring group inline-flex items-center gap-2 text-sm font-medium text-text-soft transition-colors hover:text-accent"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-border transition-transform group-hover:-translate-y-0.5 group-hover:border-accent">
              <LuArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
