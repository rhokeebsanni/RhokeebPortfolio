import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  LuArrowUpRight,
  LuCheck,
  LuCopy,
  LuMail,
  LuMapPin,
  LuSend,
} from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const EMAIL = "rhokeebsanni@gmail.com";

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "@rhokeebsanni",
    href: "https://github.com/rhokeebsanni",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "in/rhokeeb-sanni",
    href: "https://www.linkedin.com/in/rhokeeb-sanni",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the mailto link below still works */
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a role, a project, or just want to say hi? My inbox is open and I reply fast."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* Info panel */}
        <Reveal from="right">
          <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface p-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg px-3 py-1.5 text-sm text-text-soft">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-500" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Available for new opportunities
            </div>

            <p className="text-text-soft">
              Whether it's an internship, a freelance build, or a full-time
              role — I'd love to hear what you're working on.
            </p>

            <button
              onClick={copyEmail}
              className="focus-ring group flex items-center gap-3 rounded-xl border border-border bg-bg p-4 text-left transition-colors hover:border-accent"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <LuMail size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-wide text-muted">
                  Email
                </span>
                <span className="block truncate font-medium text-text">
                  {EMAIL}
                </span>
              </span>
              <span className="shrink-0 text-muted transition-colors group-hover:text-accent">
                {copied ? <LuCheck size={18} /> : <LuCopy size={18} />}
              </span>
            </button>

            <div className="flex items-center gap-2 text-sm text-text-soft">
              <LuMapPin size={16} className="text-accent" />
              Nigeria · open to remote worldwide
            </div>

            <div className="mt-auto grid gap-3 sm:grid-cols-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring group flex items-center gap-3 rounded-xl border border-border bg-bg p-3 transition-colors hover:border-accent"
                  >
                    <Icon
                      size={20}
                      className="text-text-soft transition-colors group-hover:text-accent"
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-text">
                        {s.label}
                      </span>
                      <span className="block truncate text-xs text-muted">
                        {s.handle}
                      </span>
                    </span>
                    <LuArrowUpRight
                      size={15}
                      className="ml-auto text-muted transition-colors group-hover:text-accent"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal from="left">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-7"
          >
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-text-soft">
                    Name
                  </span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Jane Recruiter"
                    className={field}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-text-soft">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="jane@company.com"
                    className={field}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-text-soft">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Hi Rhokeeb, we're hiring for…"
                  className={`${field} resize-none`}
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-accent-contrast shadow-lg shadow-accent/20 transition-colors hover:bg-accent-strong"
              >
                {sent ? (
                  <>
                    <LuCheck size={18} />
                    Opening your mail app…
                  </>
                ) : (
                  <>
                    <LuSend size={17} />
                    Send message
                  </>
                )}
              </motion.button>
              <p className="text-center text-xs text-muted">
                This opens your email app with the message ready to send.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
