import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import { Inter } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burçin | Portfolyo",
  description: " Junior Computer Engineer.",
  keywords: [
    "JavaScript",
    "HTML & CSS",
    "TypeScript",
    "Python",
    "React",
    "React Native",
    "Flutter",
    "Dart",
    "C",
    "MySQL",
    "PHP",
    "Firebase Authentication",
    "Firebase Firestore",
    "Push Notification",
    "REST API",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
