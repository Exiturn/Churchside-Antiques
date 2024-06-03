import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Churchside Antiques",
  url: "https://churchsideantiques.org.uk",
  siteName: "Churchside Antiques, Nantwich Gold Buyer",
  description:
    "Antique Buying & Selling based in Nantwich | We buy everything from a silver thimble to a grandfather clock. Just ask! Nantwich based gold buyer & seller.",
  googleSiteVerification: "wX0p2TC1gErEQjTVy5s3V419NxOJY9L0kXzq4nOyffE",
  keywords: [
    "antique",
    "nantwich gold seller",
    "nantwich antiques",
    "nantwich gold buyer",
    "antique gold buyer",
    "jewellery dealer",
    "dealer",
    "churchside antiques",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LJ6WZWYNW3"
        strategy="afterInteractive"
        id="ga_analytics"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-LJ6WZWYNW3');
         `}
      </Script>
    </html>
  );
}
