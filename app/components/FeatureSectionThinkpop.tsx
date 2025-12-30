"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Materi Digital & Teks Poin Penting",
    tagline: "Materi Ringkas, Belajar Lebih Efisien.",
    desc: "Pengguna dapat membaca ringkasan materi pembelajaran yang disajikan dalam bentuk poin-poin penting di dalam aplikasi. Materi ini dirancang agar mudah dipahami, praktis, dan dapat diakses secara fleksibel kapan saja tanpa harus selalu membawa buku fisik.",
    textColor: "text-black"
  },
  {
    title: "Kuis Interaktif Berbasis Games",
    tagline: "Uji Kemampuan Sambil Bermain.",
    desc: "Fitur ini menyajikan kuis interaktif yang mengadopsi model edutainment (perpaduan edukasi dan hiburan). Dengan sistem berbasis games, siswa dapat mengerjakan soal latihan dengan cara yang menyenangkan, yang terbukti mampu meningkatkan hasil belajar serta mengurangi kejenuhan saat belajar.",
    textColor: "text-black"
  },
  {
    title: "Progress Tracker",
    tagline: "Pantau Progres Belajarmu Setiap Hari.",
    desc: "Aplikasi dilengkapi dengan fitur pelacak kemajuan untuk memantau sejauh mana siswa telah menguasai materi dan mengerjakan kuis. Hal ini memungkinkan proses belajar yang lebih mandiri, terukur, dan terorganisir.",
    textColor: "text-black"
  },
  {
    title: "Buku Interaktif & Hologram 3D",
    tagline: "Melihat Materi Jadi Lebih Hidup.",
    desc: "Fitur ini menggabungkan buku fisik dengan teknologi hologram 3D interaktif yang dapat di-scan melalui aplikasi. Penggunaan gambar visual tiga dimensi ini dirancang efektif untuk meningkatkan fokus belajar siswa, kemampuan kognitif, serta daya tarik pembelajaran melalui muatan visual yang kreatif.",
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

export default function FeatureSectionThinkpop() {
  return (
    <section className="py-20">
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} />
      ))}
    </section>
  );
}