import type { Metadata } from "next";
import "./globals.css";
import { Lato } from 'next/font/google';
import NavBar from "@/components/navbar";

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

  const routes = [
    { name: "Home", link: "/" },
    { name: "Publications", link: "/publications" }
  ]
  return (
    <html lang="en" className={lato.className}>
      <body
        className="mx-2 md:mx-12 lg:mx-24 antialiased"
      >
        <NavBar routes={routes} />
        <div className="pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}
