import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Churchside Antiques",
  description:
    "Antique Buying & Selling based in Nantwich | We buy everything from a silver thimble to a grandfather clock. Just ask!",
  googleSiteVerification: "wX0p2TC1gErEQjTVy5s3V419NxOJY9L0kXzq4nOyffE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
