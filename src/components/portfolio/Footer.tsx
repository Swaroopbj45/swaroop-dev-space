import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jyothi Swaroop Bandlamudi. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/swaroopbj45" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 transition hover:text-primary">
            <GithubIcon width={18} height={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-md p-2 transition hover:text-primary">
            <LinkedinIcon width={18} height={18} />
          </a>
          <a href="mailto:bandlamudiswaroop@gmail.com" aria-label="Email" className="rounded-md p-2 transition hover:text-primary">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}