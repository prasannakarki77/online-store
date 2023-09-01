import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Store",
  description: "Frontend Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
