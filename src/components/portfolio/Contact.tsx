import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something Amazing Together"
      subtitle="Have a role, project, or idea? I'd love to hear about it."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <ContactItem icon={<Mail size={18} />} label="Email" value="bandlamudiswaroop@gmail.com" href="mailto:bandlamudiswaroop@gmail.com" />
          <ContactItem icon={<Phone size={18} />} label="Phone" value="+91 9182591332" href="tel:+919182591332" />
          <ContactItem icon={<GithubIcon />} label="GitHub" value="github.com/swaroopbj45" href="https://github.com/swaroopbj45" />
          <ContactItem icon={<LinkedinIcon />} label="LinkedIn" value="Connect with me" href="#" />
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("sent");
            setTimeout(() => setStatus("idle"), 3500);
            (e.target as HTMLFormElement).reset();
          }}
          className="lg:col-span-3 glass-card rounded-2xl p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" type="email" label="Email" placeholder="you@email.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.02]"
          >
            {status === "sent" ? "Message Sent ✓" : (
              <>
                Send Message
                <Send size={16} className="transition group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactItem({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 glass-card rounded-xl p-4 transition hover:border-primary/40 hover:-translate-y-0.5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white shadow-lg">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </a>
  );
}

function Field({
  name, label, type = "text", placeholder,
}: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        maxLength={200}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}