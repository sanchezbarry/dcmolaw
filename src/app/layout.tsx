import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  NavBar  from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import FloatingBackToTop from "@/components/FloatingBackToTop";

 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Welcome',
  description: 'Matrimonial Law is our firm’s specialty and key area of practice. Our highly experienced team of lawyers not only offer sound and practical legal solutions to your legal issues, but are also able to handle them with the nuance and finesse required in dealing with delicate familial relationships.',
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-colors`}
      >
        <NavBar />
        {children}
        <FloatingBackToTop />
        <Footer />
      </body>
    </html>
  );
}
