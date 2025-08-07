import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";

const kanitSans = Kanit({
  variable: "--font-kanit-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rep AI - All-in-One Pushup Analytics App",
  description:
    "Rep AI is your intelligent pushup analytics companion, helping you track workouts, compete in duals, and get AI-powered insights to improve your performance.",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  },
  other: {
    "cache-control": "no-cache, no-store, must-revalidate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="apple-mobile-web-app-title" content="Rep AI" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanitSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
