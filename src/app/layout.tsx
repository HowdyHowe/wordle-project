import { Metadata } from "next";
import "@/styles/globals.scss"
import "@/styles/font-face.scss"

export const metadata: Metadata = {
  title: "toba.dev",
  description: "Toba's Wordle game project.",
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
