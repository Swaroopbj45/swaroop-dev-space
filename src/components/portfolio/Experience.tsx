import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Associate Software Developer",
    company: "TZeSST",
    period: "Jul 2025 – Present",
    points: [
      "Full-stack development using Java, Python, and JavaScript.",
      "Built scalable gaming backend services.",
      "Developed Auto Bet systems.",
      "Implemented wallet integrations.",
      "Designed REST APIs.",
      "Improved performance and reliability.",
      "Created reusable tools and components.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "TZeSST",
    period: "Mar 2025 – Jun 2025",
    points: [
      "Developed React and Python applications.",
      "Built internal automation tools.",
      "Worked with APIs and databases.",
      "Debugged production issues.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience" subtitle="Where I've built and shipped.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />
        <div className="space-y-12">
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-6 items-start ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary shadow-lg shadow-primary/40 ring-4 ring-background">
                <Briefcase size={14} className="text-white" />
              </div>
              <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="inline-block rounded-full glass-card px-3 py-1 text-xs font-medium text-primary">
                  {item.period}
                </span>
                <h3 className="mt-2 text-xl font-bold">{item.role}</h3>
                <p className="text-muted-foreground">{item.company}</p>
              </div>
              <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <ul className="glass-card rounded-xl p-5 space-y-2 text-sm text-muted-foreground">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}