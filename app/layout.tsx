import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getWebContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "ALFA Saiyo Sakato",
  description: "One Stop Tourism Service in West Sumatra",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getWebContent();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased bg-gray-50`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer contact={data.site_meta.contact_global} />
      </body>
    </html>
  );
}
