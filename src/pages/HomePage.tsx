import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../sections/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-[#12131A] antialiased">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
