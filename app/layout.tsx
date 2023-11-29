import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light dark:bg-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
