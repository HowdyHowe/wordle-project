import { Metadata } from "next";
import "@/styles/globals.scss"

export const metadata: Metadata = {
  title: "toba.dev",
  description: "Toba's portfolio website.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
