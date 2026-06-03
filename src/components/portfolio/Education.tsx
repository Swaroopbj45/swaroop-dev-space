import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    school: "QIS College of Engineering and Technology",
    period: "2021 – 2025",
    score: "CGPA: 8.47",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Narayana Junior College",
    period: "2019 – 2021",
    score: "Marks: 913 / 1000",
  },
  {
    degree: "SSC",
    school: "Kennedy EM High School",
    period: "2018 – 2019",
    score: "CGPA: 9.3",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-lg">
              <GraduationCap size={20} />
            </div>
            <h3 className="mt-4 text-base font-bold">{e.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="rounded-full glass-card px-2.5 py-1 text-primary">{e.period}</span>
              <span className="font-semibold text-gradient">{e.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}