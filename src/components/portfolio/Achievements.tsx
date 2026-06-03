import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, Zap, Server, Database, TrendingUp } from "lucide-react";

const items = [
  { icon: Zap, text: "Reduced manual effort from 1 week to 1 day through automation." },
  { icon: Server, text: "Developed production-grade gaming systems." },
  { icon: Award, text: "Built scalable backend services." },
  { icon: Database, text: "Migrated production databases successfully." },
  { icon: TrendingUp, text: "Improved application performance through optimization." },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Impact" title="Key Achievements">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((a, i) => (
          <motion.div
            key={a.text}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 transition hover:border-primary/40"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-lg">
              <a.icon size={20} />
            </div>
            <p className="mt-4 text-sm leading-relaxed">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}