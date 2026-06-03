import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { X, ExternalLink, Coins, LayoutDashboard, Gamepad2, Database } from "lucide-react";

const projects = [
  {
    icon: Coins,
    title: "Coin Value Generator",
    description:
      "Dynamic coin value generation system using live exchange rate APIs. Reduced manual effort from 1 week to 1 day.",
    tech: ["React", "Python", "REST APIs"],
    features: ["Live Currency Conversion", "Automation Engine", "Multi-country Support"],
  },
  {
    icon: LayoutDashboard,
    title: "Backoffice Management System",
    description: "Management platform for game data and operations across multiple titles.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    features: [
      "Revenue Tracking",
      "Player Avatar Management",
      "Transaction Monitoring",
      "Real-Time Dashboards",
    ],
  },
  {
    icon: Gamepad2,
    title: "Crash Game Development Framework",
    description: "Gaming framework built with Spring Boot and PostgreSQL for low-latency play.",
    tech: ["Spring Boot", "Java", "PostgreSQL"],
    features: [
      "Auto Bet System",
      "Wallet Integration",
      "Game Logic Engine",
      "Low Latency Architecture",
    ],
  },
  {
    icon: Database,
    title: "Database Migration (MySQL → PostgreSQL)",
    description: "Migrated 20+ production tables with zero data loss and improved query performance.",
    tech: ["PostgreSQL", "MySQL", "SQL"],
    features: [
      "Schema Conversion",
      "Query Optimization",
      "Indexing Improvements",
      "Data Integrity Validation",
    ],
  },
];

export function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects" subtitle="A selection of systems I've shipped.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.button
            key={p.title}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group text-left glass-card rounded-2xl p-6 transition hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.4)]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-lg">
                <p.icon size={22} />
              </div>
              <ExternalLink size={16} className="text-muted-foreground transition group-hover:text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-card rounded-2xl p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 rounded-md p-1 hover:bg-muted"
              >
                <X size={18} />
              </button>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-lg">
                {(() => {
                  const Icon = projects[active].icon;
                  return <Icon size={26} />;
                })()}
              </div>
              <h3 className="mt-4 text-2xl font-bold">{projects[active].title}</h3>
              <p className="mt-2 text-muted-foreground">{projects[active].description}</p>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
                Key Features
              </h4>
              <ul className="mt-3 space-y-2">
                {projects[active].features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[active].tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}