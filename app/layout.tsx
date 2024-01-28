import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam Nunn Portfolio 2024",
  description: "This is a Portfolio displsaying the work and information of Sam Nunn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-4 h-full md:min-h-screen">
          {children}
      </body>
    </html>
  );
}
