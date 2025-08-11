import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cláudio Faustino | Desenvolvedor Front-End React & Next.js | Portfolio Profissional",
  description: "Desenvolvedor Front-End especializado em React, Next.js e TypeScript com 2+ anos de experiência. Criando aplicações web modernas, performáticas e escaláveis. Disponível para oportunidades remotas e presenciais em São Paulo.",
  keywords: [
    "Desenvolvedor Front-End",
    "React Developer",
    "Next.js Developer", 
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Web Development",
    "Front-End Engineer",
    "React.js",
    "Vue.js",
    "Node.js",
    "PostgreSQL",
    "Prisma ORM",
    "Git",
    "Agile",
    "Cláudio Faustino",
    "Portfolio Desenvolvedor",
    "Desenvolvedor Web Brasil"
  ],
  authors: [{ name: "Cláudio Faustino", url: "https://github.com/fclaudio051" }],
  creator: "Cláudio Faustino",
  publisher: "Cláudio Faustino",
  category: "Technology",
  classification: "Developer Portfolio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Cláudio Faustino | Desenvolvedor Front-End React & Next.js",
    description: "Desenvolvedor Front-End especializado em React, Next.js e TypeScript. Transformando ideias em experiências digitais incríveis com foco em performance e UX.",
    siteName: "Cláudio.dev - Portfolio Profissional",
    url: "https://claudio.dev",
    images: [
      {
        url: "/photo.png",
        width: 1200,
        height: 630,
        alt: "Cláudio Faustino - Desenvolvedor Front-End React & Next.js"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cláudio Faustino | Desenvolvedor Front-End React & Next.js",
    description: "Desenvolvedor Front-End especializado em React, Next.js e TypeScript. Portfolio profissional com projetos e experiência técnica.",
    images: ["/photo.png"],
    creator: "@fclaudio051"
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
  verification: {
    google: "google-site-verification-code", // Adicione seu código de verificação do Google
  },
  alternates: {
    canonical: "https://claudio.dev"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Cláudio Faustino" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:site" content="@fclaudio051" />
        <meta name="twitter:creator" content="@fclaudio051" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}