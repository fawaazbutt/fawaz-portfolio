import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "Namelip",
  description: "Namelip is where you call people to connect with you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} </body>
    </html>
  );
}
