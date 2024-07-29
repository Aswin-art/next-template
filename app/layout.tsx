import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Next JS Template",
  description: "Template for next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <NextTopLoader color="#1e40af" />
          <Toaster position="top-center" />
          <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
