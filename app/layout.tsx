import type { Metadata } from "next";
import { Inter, Space_Mono, Orbitron, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

// Matrix Hacker Fonts
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-space-mono',
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
});

const chakraPetch = Chakra_Petch({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-chakra-petch',
});

export const metadata: Metadata = {
  title: "Koceila Djaballah | Full Stack & AI Developer",
  description: "Full Stack Developer specialized in AI and SaaS solutions. 1 year experience in digital transformation. Expert in Next.js, React, TypeScript, Python, and AI integration.",
  keywords: ["Full Stack Developer", "AI Developer", "Next.js", "React", "TypeScript", "Python", "Machine Learning", "Montreal"],
  authors: [{ name: "Koceila Djaballah" }],
  openGraph: {
    title: "Koceila Djaballah | Full Stack & AI Developer",
    description: "Full Stack Developer specialized in AI and SaaS solutions",
    url: "https://koceila-djaballah.com",
    siteName: "Koceila Djaballah Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${spaceMono.variable} ${orbitron.variable} ${chakraPetch.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
