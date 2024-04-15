import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from 'next/head';

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "600"],
});

export const metadata = {
  title: "Qspiders",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative h-full antialiased font-sans  myscrollbar overflow-y-scroll"
        )}
      >
        <main className="relative flex flex-col min-h-screen">{children}</main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </body>
    </html>
  );
}
