import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lambda",
  description: "NSMQ Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // localStorage.setItem("isDarkMode", 'true');
  // // Retrieve the boolean value
  // const isDarkMode = localStorage.getItem("isDarkMode") === "true";
  return (
    <html lang="en" className={`${true ? 'dark': ''}`}>
      <body>{children}
      <Toaster />
      </body>
    </html>
  );
}
