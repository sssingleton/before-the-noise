import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Before the Noise",
  description:
    "An invitation-only outdoor songwriter session series by Cake Records. Intimate acoustic performances of unreleased songs — before the world hears them.",
  openGraph: {
    title: "Before the Noise",
    description:
      "An invitation-only outdoor songwriter session series by Cake Records. Intimate acoustic performances of unreleased songs — before the world hears them.",
    url: "https://beforethenoise.thecakerecords.com",
    siteName: "Before the Noise",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Before the Noise",
    description:
      "An invitation-only outdoor songwriter session series by Cake Records. Intimate acoustic performances of unreleased songs — before the world hears them.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
