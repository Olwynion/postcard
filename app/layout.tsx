import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Наш первый год вместе",
  description: "Подарок для самой любимой",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body className={caveat.variable}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}