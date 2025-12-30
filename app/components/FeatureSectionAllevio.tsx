"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Self Assessment",
    tagline: "Kenali Dirimu Lebih Dalam Setiap Langkah.",
    desc: "Pahami kondisi mental Anda melalui rangkaian pertanyaan terstruktur yang berbasis standar psikologi. Dilakukan secara berkala setiap bulan, fitur ini berfungsi sebagai instrumen evaluasi mandiri untuk memantau perkembangan emosional Anda serta mendeteksi kebutuhan bantuan profesional secara dini.",
    textColor: "text-black"
  },
  {
    title: "Meditasi Terpadu",
    tagline: "Temukan Ketenangan di Tengah Hiruk Pikuk Dunia.",
    desc: "Allevio menghadirkan sesi meditasi singkat yang dipandu dengan narasi suara dan visual yang menenangkan. Fitur ini dirancang khusus untuk membantu Anda mengatur napas, meredakan pikiran yang penuh, serta mengurangi stres harian melalui teknik yang sederhana dan mudah diikuti di mana saja.",
    textColor: "text-black"
  },
  {
    title: "ChatBot & Konseling",
    tagline: "Ruang Aman untuk Bercerita, Tanpa Menghakimi.",
    desc: "Curahkan isi hati Anda kapan saja melalui ChatBOT empatik yang siap memberikan respon suportif. Jika sistem mendeteksi tingkat keparahan yang memerlukan perhatian khusus, Allevio akan secara otomatis menghubungkan Anda dengan psikolog atau psikiater profesional untuk sesi konseling online yang lebih mendalam.",
    textColor: "text-black"
  },
  {
    title: "Mood Tracker",
    tagline: "Refleksi Harian untuk Pikiran yang Lebih Sehat.",
    desc: "Jadikan refleksi sebagai kebiasaan harian yang bermakna. Melalui pertanyaan ringan mengenai kualitas tidur dan perasaan Anda, Mood Tracker membantu Anda menyadari pola emosi pribadi sekaligus memberikan rasa peduli dan perhatian yang konsisten setiap harinya.",
    textColor: "text-black"
  },
  {
    title: "AI Analysis",
    tagline: "Personalisasi Kesehatan Mental Berbasis Data.",
    desc: "Manfaatkan kekuatan teknologi AI untuk memetakan kondisi mental Anda secara spesifik. Dengan menganalisis data dari self-assessment dan mood tracker, fitur ini memberikan insight mendalam serta rekomendasi tindakan personal yang disesuaikan dengan kebutuhan unik kesehatan mental Anda.",
    textColor: "text-black"
  },
  {
    title: "Mini Game",
    tagline: "Distraksi Positif untuk Pikiran yang Lebih Rileks.",
    desc: "Alihkan kecemasan dan overthinking Anda melalui aktivitas yang menyenangkan. Fitur Mini Game seperti cari kata dirancang untuk melatih fokus dan memberikan efek relaksasi, menjadikannya sarana terapi ringan yang efektif untuk mengembalikan ketenangan pikiran di sela kesibukan.",
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

export default function FeatureSectionAllevio() {
  return (
    <section className="py-20">
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} />
      ))}
    </section>
  );
}