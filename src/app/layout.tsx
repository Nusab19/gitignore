import { ThemeProvider } from "@/components/theme/themeProvider";

import { Ubuntu } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const ubuntuFont = Ubuntu({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gitingore",
  description: "All your .gitignore files in one place",
  // add the favicon logo
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuFont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
