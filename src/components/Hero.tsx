import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuArrowDown,
  LuArrowUpRight,
  LuFileDown,
  LuMapPin,
} from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  SiCloudflare,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import profile from "../assets/profile_enhanced.jpg";

const roles = [
  "Full Stack Developer",
  "React & TypeScript Engineer",
  "Node.js Developer",
  "UI-focused Problem Solver",
];

const stats = [
  { value: "3+", label: "Shipped products" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Open to work" },
];

const floatingBadges = [
  { icon: SiTypescript, label: "TS", className: "-left-6 top-10", color: "#3178C6" },
  { icon: SiPostgresql, label: "PG", className: "-right-5 top-1/3", color: "#4169E1" },
  { icon: SiTailwindcss, label: "TW", className: "-left-4 bottom-16", color: "#06B6D4" },
  { icon: SiCloudflare, label: "CF", className: "right-2 -bottom-4", color: "#F38020" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      {/* Animated background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="animate-float-slow absolute -left-24 top-10 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />
        <div className="animate-float-slower absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent-soft/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[90px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm text-text-soft backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-500" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Available for internships &amp; full-stack roles
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-4xl font-bold leading-[1.07] text-text sm:text-5xl md:text-6xl"
            >
              Hi, I'm Rhokeeb —
              <br className="hidden sm:block" /> I build{" "}
              <span className="text-gradient">fast, modern</span>
              <br className="hidden sm:block" /> web experiences.
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-5 flex h-8 items-center gap-2 font-mono text-base text-accent sm:text-lg"
            >
              <span className="text-muted">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.32 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent" />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-soft"
            >
              Computer Science student turning ideas into production-grade SaaS
              — Next.js and TypeScript up front, with Postgres, queues, object
              storage and payments wired up behind it — and a sharp eye for the
              details that make products feel good to use.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="focus-ring group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-contrast shadow-lg shadow-accent/20 transition-all hover:bg-accent-strong hover:shadow-xl hover:shadow-accent/25"
              >
                View my work
                <LuArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                <LuFileDown size={18} />
                Resume
              </a>

              <div className="ml-1 flex items-center gap-1">
                <a
                  href="https://github.com/rhokeebsanni"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-border text-text-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <FaGithub size={19} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rhokeeb-sanni"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-border text-text-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <FaLinkedin size={19} />
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-7"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-text">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto hidden w-fit lg:block"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-transparent to-accent-soft/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-border bg-surface/60 p-3 shadow-2xl backdrop-blur">
              <img
                src={profile}
                alt="Rhokeeb Sanni"
                className="h-[26rem] w-[22rem] rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border bg-surface/90 px-4 py-1.5 text-xs font-medium text-text-soft shadow-lg backdrop-blur">
                <LuMapPin size={13} className="text-accent" />
                Based in Nigeria · Remote-friendly
              </div>
            </div>

            {floatingBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.12, type: "spring" }}
                  className={`absolute ${badge.className} grid h-12 w-12 place-items-center rounded-2xl border border-border bg-surface shadow-xl`}
                >
                  <Icon size={24} style={{ color: badge.color }} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted md:flex"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <LuArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
