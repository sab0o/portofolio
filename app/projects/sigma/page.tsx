"use client";

import Phone3D from "@/app/components/Phone3D";
import Image from "next/image";
import Navbar from "@/app/components/Navbar"; 
import FeatureSectionSigma from "@/app/components/FeatureSectionSigma"; 
import Footer from "@/app/components/Footer";

export default function SigmaPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 font-sans">
      <Navbar />

      {/* Header Logo & Tagline */}
      <div className="flex flex-col items-center mb-16 pt-[150px]">
        <Image 
          src="/sigmatagline.png" 
          alt="Sigma Tagline" 
          width={1200} 
          height={400} 
          priority 
          className="object-contain"
        />
      </div>

      {/* Section 1: 3D Interaktif */}
      <section className="max-w-4xl mx-auto mb-52">
        <div className="flex justify-center">
          <Phone3D 
            screenshot1="/screenshots/ss-sigma-home.png"
            screenshot2="/screenshots/ss-sigma-splash.png" 
          />
        </div>
      </section>

      {/* Section 2: Figma Embed (Try it!) */}
      <section className="max-w-5xl mx-auto mb-32 px-4">
        <h2 className="text-5xl font-mono text-center mb-12 tracking-tighter italic font-black uppercase">
          Try it!
        </h2>
        
        {/* Container Iframe */}
        <div className="flex justify-center">
          <iframe 
          src="https://embed.figma.com/proto/TdM0zrGvwCoDR2yxxT98sI/Group-4-%F0%9F%A6%81?page-id=1%3A6&node-id=2544-53889&p=f&viewport=188%2C16%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2544%3A53512&embed-host=share" 
          width="800" height="450"
          allowFullScreen></iframe>
        </div>
      </section>
         {/* Section 3: Fitur */}
        <section className="max-w-6xl mx-auto">
        {/* Ganti mb-20 sesuai keinginan Anda */}
        <div className="text-center mb-[100px] pt-[200px]"> 
            <h2 className="text-[50px] font-bold">Our Features</h2>
        </div>
        
        <FeatureSectionSigma />
        </section>

      <Footer />
    </main>
  );
}