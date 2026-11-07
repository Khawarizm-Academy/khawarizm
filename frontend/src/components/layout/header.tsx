import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui";
import { NAV_ITEMS } from "@/constants/site";
import { HOME_ANCHORS } from "@/router/routes";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "./logo";

const linkClass =
  "rounded-sm font-sans text-base text-white/70 transition-colors hover:text-brand";

/** Indigo top bar; collapses into a toggled panel below `md`. */
function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="bg-navy text-navy-foreground">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo className="text-white" />

        <nav aria-label="التنقل الرئيسي" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={HOME_ANCHORS.contact}
          className={cn(
            buttonVariants({ variant: "light", size: "lg" }),
            "hidden md:inline-flex",
          )}
        >
          تواصل معنا
        </a>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-12 items-center justify-center rounded-md border border-white text-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-3 font-sans text-base text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={HOME_ANCHORS.contact}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "mt-4 w-full",
                )}
              >
                تواصل معنا
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Header };
