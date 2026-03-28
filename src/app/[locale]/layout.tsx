import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getResumeData } from "@/data/resume";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const DATA = getResumeData(locale as "en" | "pt");

  return {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
      title: DATA.name,
      description: DATA.description,
      url: DATA.url,
      siteName: DATA.name,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: DATA.name,
      card: "summary_large_image",
    },
    verification: {
      google: "",
      yandex: "",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar locale={locale as "en" | "pt"} />
        </TooltipProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
