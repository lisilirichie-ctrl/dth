import type { Metadata } from "next";
import { Lora, Figtree } from "next/font/google";
import "./globals.css";

const heading = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Door to Heaven Church",
  description:
    "Join us for worship, sermons, events and community at Door to Heaven Church.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-white font-[family-name:var(--font-body)] text-[#222] antialiased">
        {children}
      </body>
    </html>
  );
}