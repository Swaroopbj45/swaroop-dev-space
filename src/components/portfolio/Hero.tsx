import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Java Developer",
  "Python Developer",
  "Gaming Systems Developer",
];

function useTypewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[idx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return text;
}

export function Hero() {
  const typed = useTypewriter();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient animate-gradient">Jyothi Swaroop</span>
            <br />
            <span className="text-foreground/90">Bandlamudi</span>
          </h1>
          <div className="flex items-center gap-2 text-xl sm:text-2xl text-muted-foreground">
            <span className="font-semibold text-foreground/80">{typed}</span>
            <span className="inline-block h-6 w-[2px] bg-primary animate-pulse" />
          </div>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Building scalable backend systems, gaming platforms, and full-stack
            applications. Associate Software Developer at TZeSST.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.03] hover:shadow-primary/50"
            >
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg glass-card px-6 py-3 text-sm font-semibold transition hover:bg-muted/60"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4">
            {[
              { icon: Github, href: "https://github.com/swaroopbj45", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bandlamudiswaroop@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg glass-card transition hover:scale-110 hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <CodeIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function CodeIllustration() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-30 blur-3xl" />
      <div className="relative glass-card rounded-2xl p-1 shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-muted-foreground">developer.ts</span>
        </div>
        <pre className="overflow-hidden p-6 text-sm leading-relaxed font-mono">
{`const swaroop = {
  role: "Associate Software Developer",
  company: "TZeSST",
  stack: ["Java", "Spring Boot", "Python",
          "React", "PostgreSQL"],
  focus: [
    "Scalable backend systems",
    "Gaming platforms",
    "Wallet integrations",
    "REST API design"
  ],
  mindset: "Build reliable systems that scale.",
};

swaroop.ship();`}
        </pre>
      </div>
    </div>
  );
}