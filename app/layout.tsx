import type { Metadata } from "next";
import { Fraunces, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Enchiladas Michoacanas La Ruana | Auténtico Sabor Mexicano | Bellflower, CA",
  description:
    "Auténtico sabor mexicano en Bellflower. Traditional Michoacán-style enchiladas, quesadillas, chilaquiles & more. Dine in, takeout & delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${bricolage.variable}`}>
      <body
        className="antialiased pb-20 lg:pb-0"
        style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
