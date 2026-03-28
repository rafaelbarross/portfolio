"use client";

import { usePathname, useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: "en" | "pt";
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: "en" | "pt") {
    if (next === locale) return;

    // Replace the current locale prefix (or lack of it) with the new one.
    // With localePrefix: "as-needed", English has no prefix (/projects)
    // and Portuguese has /pt prefix (/pt/projects).
    let newPath: string;
    if (locale === "pt") {
      // current path starts with /pt — strip it
      newPath = pathname.replace(/^\/pt/, "") || "/";
    } else {
      // current path has no prefix — add /pt
      newPath = `/pt${pathname}`;
    }

    router.push(newPath);
  }

  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "h-7 px-2 text-xs font-medium",
          locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-muted-foreground text-xs">/</span>
      <button
        onClick={() => switchLocale("pt")}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "h-7 px-2 text-xs font-medium",
          locale === "pt" ? "opacity-100" : "opacity-40 hover:opacity-70"
        )}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  );
}
