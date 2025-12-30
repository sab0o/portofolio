"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Coinch",
    tagline: "Ubah Recehan Jadi Masa Depan.",
    desc: "Coinch adalah fitur nabung bareng untuk target finansial Anda. Baik itu untuk membeli gadget impian, dana liburan, atau dana darurat, Coinch membantu Anda menyisihkan uang secara konsisten dengan visualisasi progres yang memotivasi. Menabung bukan lagi beban, tapi sebuah pencapaian yang menyenangkan.",
    textColor: "text-black"
  },
  {
    title: "Spense",
    tagline: "Kontrol Pengeluaran, Tanpa Perlu Pusing.",
    desc: "Spense adalah fitur Impulse Blocker dimana pengguna dapat menanyakan dan memvalidasi barang yang ingin pengguna beli dengan keuangan yang pengguna punya. Spense membantu pengguna mengelola pengeluaran dengan lebih bijak, mengurangi pembelian impulsif, dan meningkatkan kesehatan finansial jangka panjang.",
    textColor: "text-black"
  },
  {
    title: "Cuancademy",
    tagline: "Pelajari Finansial dengan Cara Seru.",
    desc: "Literasi keuangan tidak harus membosankan. Cuancademy menyediakan berbagai modul edukasi finansial yang ringan, mulai dari dasar-dasar investasi hingga strategi mengelola aset. Belajar cara menghasilkan \"cuan\" lebih banyak dan kelola kekayaan Anda dengan ilmu yang tepat bersama para ahli.Investasi terleher ke atas dimulai di sini. Belajar cara menghasilkan 'cuan' lebih banyak dengan modul edukasi finansial yang ringan dan seru.",
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

export default function FeatureSectionSakuin() {
  return (
    <section className="py-20">
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} />
      ))}
    </section>
  );
}