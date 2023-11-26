"use client";
import "./globals.css";
import "./animations.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='body'>
        <ToastContainer />
        <Navbar />
        <div className='main'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
