import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import PageLoader from "@/components/PageLoader";

// Professional NBC Banking Font - Inter for body
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Premium Display Font - Sora for headings
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Koceila Djaballah | Développeur Full Stack & IA",
  description: "Développeur Full Stack spécialisé en IA et solutions SaaS. 1 an d'expérience en transformation digitale. Expert en Next.js, React, TypeScript, Python et intégration d'IA.",
  keywords: ["Développeur Full Stack", "Développeur IA", "Next.js", "React", "TypeScript", "Python", "Apprentissage Automatique", "Montréal"],
  authors: [{ name: "Koceila Djaballah" }],
  openGraph: {
    title: "Koceila Djaballah | Développeur Full Stack & IA",
    description: "Développeur Full Stack spécialisé en IA et solutions SaaS",
    url: "https://koceila-djaballah.com",
    siteName: "Portfolio de Koceila Djaballah",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} ${sora.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <PageLoader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
