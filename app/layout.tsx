"use client";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const metadata: Metadata = {
  title: "Lambda",
  description: "NSMQ Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title) ?? ""}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body>
        <Provider store={store}>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
