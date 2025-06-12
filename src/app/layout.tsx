import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV",
  description: "CV built by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="mx-2 md:mx-12 lg:mx-24 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
