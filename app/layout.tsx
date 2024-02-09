import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.scss";
import { roboto } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "StrongWood®",
  description: 'El balance perfecto entre hierro y madera',
  applicationName: "StrongWood®",
  authors: {
    name: 'Tomás Di Bacco',
    url: 'https://www.linkedin.com/in/tomas-di-bacco/'
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
  userScalable: true,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main id="top">
          {children}
        </main>
      </body>
    </html>
  );
}
