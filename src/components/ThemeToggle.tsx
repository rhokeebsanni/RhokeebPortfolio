import { AnimatePresence, motion } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="focus-ring relative grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-text-soft transition-colors hover:border-accent hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -12, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 12, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {isDark ? <LuSun size={17} /> : <LuMoon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
