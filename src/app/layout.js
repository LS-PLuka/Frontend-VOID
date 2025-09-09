import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Void - Login",
  description: "",
  icons: {
    icon: "/logo/faviicon/logoBRANCO.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
     <body>{children}</body>
    </html>
  );
}
