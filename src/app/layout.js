import { Inter } from "next/font/google";
import "./globals.css";
import { NavBarCustom } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clases de Ingles",
  description: "App para mejorar el ingles hablando y escuchando",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarCustom />
        {children}
      </body>
    </html>
  );
}
