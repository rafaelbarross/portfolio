"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  locale: "en" | "pt";
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function toggle() {
    const next = locale === "en" ? "pt" : "en";
    let newPath: string;
    if (locale === "pt") {
      newPath = pathname.replace(/^\/pt/, "") || "/";
    } else {
      newPath = `/pt${pathname}`;
    }
    router.push(newPath);
  }

  return (
    <button
      onClick={toggle}
      aria-label={locale === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
      className="size-full flex items-center justify-center text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
    >
      {locale === "en" ? "EN" : "PT"}
    </button>
  );
}
