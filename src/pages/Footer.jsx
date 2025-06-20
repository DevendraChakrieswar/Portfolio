import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-18">
      <div className="container max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Devendra. All rights reserved
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors animate-bounce"
        >
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
};
