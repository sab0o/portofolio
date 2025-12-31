"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Pinterest-Like Recipe Feed",
    tagline: "Temukan Inspirasi Sekaligus Tekniknya.",
    desc: "Jelajahi umpan komunitas yang artistik di mana setiap foto dilengkapi dengan \"resep\" lengkap—mulai dari pengaturan kamera seperti ISO, shutter speed, dan aperture, hingga preset spesifik yang digunakan. Anda tidak hanya melihat karya seni, tetapi juga mempelajari proses di baliknya. Fitur ini menggabungkan inspirasi visual dengan edukasi teknis, memungkinkan pengguna untuk tidak hanya mengagumi foto-foto menakjubkan tetapi juga memahami cara menciptakannya sendiri.",
    textColor: "text-black"
  },
  {
    title: "Interactive Photography Community",
    tagline: "Terhubung dengan Sesama Pecinta Visual.",
    desc: "Bangun profil portofolio Anda sendiri, simpan preset favorit dari kreator lain, dan berinteraksi melalui sistem suka, komentar, serta pengikut. Rensa bukan sekadar alat pengeditan, melainkan ekosistem untuk saling belajar dan mengapresiasi teknik fotografi. Dengan fitur komunitas yang interaktif, pengguna dapat memperluas jaringan mereka, mendapatkan umpan balik konstruktif, dan terus mengasah keterampilan mereka dalam lingkungan yang suportif dan inspiratif.",
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

export default function FeatureSectionRensa() {
  return (
    <section className="py-20">
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} />
      ))}
    </section>
  );
}