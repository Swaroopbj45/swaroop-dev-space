import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", level: 88 },
      { name: "React", level: 82 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "REST APIs", level: 92 },
      { name: "Microservices", level: 78 },
      { name: "Database Design", level: 85 },
    ],
  },
];

const other = [
  "Full Stack Development",
  "API Integration",
  "Query Optimization",
  "Gaming Systems Development",
  "System Design",
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Expertise" subtitle="The stack I use to build and ship.">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {g.title}
            </h3>
            <div className="space-y-4">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full bg-gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 glass-card rounded-2xl p-6"
      >
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
          Other Strengths
        </h3>
        <div className="flex flex-wrap gap-2">
          {other.map((o) => (
            <span
              key={o}
              className="rounded-full border border-border bg-muted/30 px-3 py-1.5 text-sm transition hover:border-primary hover:text-primary"
            >
              {o}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}