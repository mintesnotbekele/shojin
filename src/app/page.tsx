// app/page.tsx – Landing Page
"use client";

import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/layout/Footer";
import Products from "@/components/layout/Products";
import QuoteBlock from "@/components/layout/QuoteBlock";

import AboutGameSection from "@/components/layout/AboutGameSection";
import HowToPlay from "@/components/layout/HowToPlay";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <ThemeProvider>
      <main style={{background: '#D6DDD5'}} className="bg-dark text-light min-h-screen font-shojin relative">
        <Header />
        <Hero />
        <AboutGameSection/>
        <QuoteBlock/>
        <HowToPlay/>
        <Products/>
        
        <Footer/>
      </main>
    </ThemeProvider>
  );
}



