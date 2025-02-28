import { Metadata } from "next";
import "../styles/globals.css";
import { Anton, Khand } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const khand = Khand({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: "Mathpholio!",
  description: "Portfolio website created by Matheus Souza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth dark:bg-black dark:text-white"
      style={{ scrollBehavior: "smooth" }}
    >
      <title>Mathpholio!</title>
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <link
          href="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${anton.variable} ${khand.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          async
          type="text/javascript"
          src="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/letteranimation.min.js"
        ></script>
      </body>
    </html>
  );
}
