'use client'

import { useEffect } from "react";
import "aos/dist/aos.css";

import { Header } from './partial/Header';
import { Hero } from './partial/Hero';
import { Features } from './partial/Features';
import { Templates } from './partial/Templates';
import { HowItWork } from './partial/HowItWork';
import { Footer } from './partial/Footer';

export default function LandingPage() {
  useEffect(() => {
    import("aos").then((Aos) => {
      Aos.init({ duration: 1000 });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Templates />
      <HowItWork />
      <Footer />
    </div>
  );
}
