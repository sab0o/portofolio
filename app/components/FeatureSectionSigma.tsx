"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Panggil SIGMA",
    tagline: "Aksi Cepat, Nyawa Terelamatkan.",
    desc: "Panggil SIGMA adalah fitur respons cepat yang mengintegrasikan berbagai layanan darurat ke dalam satu sistem One-Call Action. Tanpa perlu menghafal banyak nomor darurat yang berbeda, pengguna dapat terhubung secara instan dengan unit bantuan medis, pemadam kebakaran, hingga kepolisian hanya dengan satu sentuhan, memastikan bantuan tiba di saat yang paling krusial.",
    textColor: "text-black"
  },
  {
    title: "Lapor SIGMA",
    tagline: "Mata dan Telinga untuk Keselamatan Bersama.",
    desc: "Jadilah bagian dari solusi keamanan lingkungan melalui Lapor SIGMA. Fitur ini memungkinkan pengguna untuk melaporkan kejadian darurat atau potensi bahaya di sekitar mereka secara real-time. Dilengkapi dengan sistem koordinat lokasi yang presisi dan lampiran bukti visual, setiap laporan akan langsung diteruskan ke unit reaksi cepat terdekat untuk penanganan lebih lanjut.",
    textColor: "text-black"
  },
  {
    title: "Berita SIGMA",
    tagline: "Waspada dan Terinformasi Setiap Saat.",
    desc: "Berita SIGMA menyajikan aliran informasi terverifikasi mengenai situasi darurat, bencana alam, hingga pembaruan kondisi keamanan di area sekitar. Dengan basis data aktual yang dikurasi secara ketat, fitur ini membantu masyarakat tetap waspada, terhindar dari zona bahaya, serta memberikan panduan mitigasi yang tepat berdasarkan situasi yang sedang berkembang di lapangan.",
    textColor: "text-black"
  }
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="h-[500px] flex flex-col justify-center items-center text-center px-[20px]"
    >
      {/* SEBELUMNYA: ada border-l-4 dan pl-8 di sini. SEKARANG: bersih */}
      <div className="max-w-10xl">
        <h2 className="text-[50px] font-black mb-4 px-[400px] text-justify">
          {feature.title}
        </h2>
        <h3 className="text-2xl font-semibold mb-6 text-gray-400 italic px-[400px] text-justify">
          — {feature.tagline}
        </h3>
        <p className="text-xl leading-relaxed text-gray-700 font-medium px-[400px] text-justify">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeatureSectionSigma() {
  return (
    <section className="py-20">
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} />
      ))}
    </section>
  );
}