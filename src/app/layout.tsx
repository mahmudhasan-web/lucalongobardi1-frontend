import type { Metadata } from "next";
import "./globals.css";
// import bgImage from "@/assists/bg.png"
// import Image from "next/image";
// import { GeistMono } from "geist/font/mono"


export const metadata: Metadata = {
  title: "Nutrigenix AI",
  description: "We are creating a next-generation platform where AI agents can deliver a science-backed healthy diet in just one click.",
  icons: {
    icon: '/Vector 2.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={` min-h-screen`}
      >
        <div className="fixed w-full h-full">
          <img src={`/bg.png`} alt="bgImage" className="w-full h-full object-cover"></img>
        </div>
        <div className="relative container">
          {children}
        </div>
      </body>
    </html>
  );
}