// app/page.tsx – Landing Page
"use client";

import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="bg-dark text-light min-h-screen font-shojin relative">
        <Header />
        <Hero />
        <Footer/>
      </main>
    </ThemeProvider>
  );
}



