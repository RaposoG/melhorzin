import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Os Melhorzin",
  description: "O melhor site do mundo",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
