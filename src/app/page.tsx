// app/page.tsx – Landing Page
"use client";

import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/layout/Footer";
import Products from "@/components/layout/Products";
import QuoteBlock from "@/components/layout/QuoteBlock";

import AboutGameSection from "@/components/layout/AboutGameSection";

export default function Home() {
  return (
    <ThemeProvider>
      <main style={{background: '#D6DDD5'}} className="bg-dark text-light min-h-screen font-shojin relative">
        <Header />
        <Hero />
        <AboutGameSection/>
        <QuoteBlock/>
        <Products/>
        <Footer/>
      </main>
    </ThemeProvider>
  );
}



