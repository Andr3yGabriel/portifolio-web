import type { Metadata } from "next";
import { Jost } from 'next/font/google';
import "./globals.scss";

const jost = Jost({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Andrey Gonçalves",
  description: "Web portifolio of Andrey Gonçalves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
