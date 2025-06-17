import type { Metadata } from "next";
import "./globals.css";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

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
    <html lang="en" className={lato.className}>
      <body
        className="mx-2 md:mx-12 lg:mx-24 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
