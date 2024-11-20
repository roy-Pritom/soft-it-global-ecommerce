import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providres/Provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "MANIO",
  description: "MANIO ECOM",
  icons: {
    icon: "/iconnew.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>
          <Toaster position="top-right" richColors />
          {children}
        </Providers>
      </body>
    </html>
  );
}
