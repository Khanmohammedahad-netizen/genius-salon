import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "GENIUS Hair And Beauty Family Salon | Luxury Experience in Hyderabad",
  description: "Crafting Confidence. Defining Style. Premium Hair & Beauty Experience in Hyderabad. Best salon for Keratin, Balayage, Bridal, and Grooming.",
  keywords: ["Best salon in Hyderabad", "Luxury hair salon Hyderabad", "Bridal makeup Hyderabad", "Premium grooming Hyderabad", "Genius Salon"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
