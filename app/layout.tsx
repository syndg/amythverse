import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Amythverse",
  description:
    "Where imagination becomes reality and creativity knows no bounds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} relative min-h-[100vh] bg-[rgb(15,17,26)]`}
      >
        {children}
      </body>
    </html>
  );
}
