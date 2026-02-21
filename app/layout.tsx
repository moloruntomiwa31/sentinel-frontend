import type { Metadata } from "next";
import { Lato } from "next/font/google"; 
import "./globals.css";
import QueryProvider from "../components/QueryProvider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], 
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Sentinel",
  description: "Empowering healthcare providers with AI predictive analytics and seamless IoT integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased font-sans`} 
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}