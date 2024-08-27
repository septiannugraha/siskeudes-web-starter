import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";
import { ToastProvider } from "./components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siskeudes Web Starter Kit",
  description: "Starter Kit Siskeudes Web",
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/icons/ios/32.png' },
    { rel: 'apple-touch-icon', url: '/icons/ios/180.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', url: '/icons/ios/152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/icons/ios/180.png' },
    { rel: 'apple-touch-icon', sizes: '167x167', url: '/icons/ios/167.png' },
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
        <ToastProvider>
          <AppShell>{children}</AppShell>
        </ToastProvider>
      </body>
    </html>
  );
}
