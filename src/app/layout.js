// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Accredian Enterprise",
  description: "Next-Gen Expertise For Your Enterprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}