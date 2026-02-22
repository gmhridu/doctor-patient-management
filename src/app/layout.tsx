import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediCare - Doctor-Patient Management System",
  description: "A comprehensive platform for managing doctor-patient interactions, appointments, and medical records.",
  keywords: [
    "healthcare management",
    "doctor-patient platform",
    "medical appointments",
    "patient records",
    "healthcare software",
    "telemedicine",
    "clinic management",
  ],
  authors: [
    { name: "MediCare Team", url: "https://medcare.com" },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="" className={roboto.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
