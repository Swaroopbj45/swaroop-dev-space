import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "./Section";
import { Briefcase, Rocket, Cpu, Server } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { icon: Briefcase, label: "Experience", value: 1, suffix: "+ yr" },
  { icon: Rocket, label: "Projects Completed", value: 12, suffix: "+" },
  { icon: Cpu, label: "Technologies", value: 15, suffix: "+" },
  { icon: Server, label: "Production Systems", value: 6, suffix: "+" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="About Me"
      subtitle="Engineer focused on reliable systems, clean APIs, and shipping at scale."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-card rounded-2xl p-8 leading-relaxed text-muted-foreground"
        >
          <p>
            I am a <span className="text-foreground font-semibold">Software Developer</span>{" "}
            with experience designing and building scalable backend services, gaming platforms,
            and full-stack applications. I have worked extensively with{" "}
            <span className="text-foreground font-semibold">Java, Spring Boot, Python,
            React, PostgreSQL, and MySQL</span>.
          </p>
          <p className="mt-4">
            My expertise includes REST APIs, wallet integrations, automation systems,
            database optimization, and high-performance gaming applications. I enjoy solving
            complex engineering problems and building reliable systems that scale.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 text-center hover:scale-[1.03] transition"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white">
                <s.icon size={18} />
              </div>
              <div className="text-2xl font-extrabold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}