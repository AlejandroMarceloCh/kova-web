import type { Metadata, Viewport } from "next";
import { Unbounded, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kova.pe"),
  title: "Kova — Construimos la ventaja que tu operación todavía no tiene.",
  description:
    "Estudio de ingeniería de datos y ML en Lima. Construimos sistemas que funcionan en producción — y nos quedamos.",
  keywords: [
    "Kova",
    "ingenieria de software",
    "machine learning",
    "inteligencia artificial",
    "analitica de datos",
    "Lima Peru",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Kova" }],
  creator: "Kova",
  publisher: "Kova",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kova — Construimos la ventaja que tu operación todavía no tiene.",
    description: "Sistemas de datos, ML e IA en producción. Lima, Perú.",
    type: "website",
    url: "/",
    siteName: "Kova",
    locale: "es_PE",
    images: [{ url: "/og.jpg", width: 1200, height: 800, alt: "Kova" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kova — Construimos la ventaja que tu operación todavía no tiene.",
    description: "Sistemas de datos, ML e IA en producción. Lima, Perú.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#14100E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${unbounded.variable} ${hanken.variable} ${mono.variable}`}
    >
      <body className="grain">
        <a href="#contenido-principal" className="skip-link">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
