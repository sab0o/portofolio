"use client";

import Phone3D from "@/app/components/Phone3D";
import Image from "next/image";
import Navbar from "@/app/components/Navbar"; 
import FeatureSectionDompy from "@/app/components/FeatureSectionDompy"; 
import Footer from "@/app/components/Footer";

export default function DompyPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 font-sans">
      <Navbar />

      {/* Header Logo & Tagline */}
      <div className="flex flex-col items-center mb-16 pt-[150px]">
        <Image 
          src="/dompytagline.png" 
          alt="Dompy Tagline" 
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
            screenshot1="/screenshots/ss-dompy-fitur.png"
            screenshot2="/screenshots/ss-dompy-home.png" 
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
          src="https://embed.figma.com/proto/Pon38jw6U9phlYzGLssyh7/HOLOGY?page-id=0%3A1&node-id=1-537&p=f&viewport=45%2C227%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A340&embed-host=share" 
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
        
        <FeatureSectionDompy />
        </section>

      <Footer />
    </main>
  );
}