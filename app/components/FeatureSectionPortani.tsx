"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Pasar Tani",
    tagline: "Hasil Bumi Segar, Langsung dari Genggaman.",
    desc: "Pasar Tani adalah jembatan digital yang memutus rantai distribusi panjang, menghubungkan petani langsung dengan meja makan konsumen. Dengan sistem transaksi yang transparan serta layanan kurasi produk yang ketat, kami memastikan setiap hasil panen yang sampai ke tangan Anda adalah kualitas terbaik yang terjaga kesegarannya.",
    textColor: "text-black"
  },
  {
    title: "MITRAni (Mitra Petani)",
    tagline: "Sinergi Bisnis untuk Rantai Pasok Berkelanjutan.",
    desc: "MITRAni hadir untuk memperkuat ekosistem B2B (Business-to-Business) di sektor agrikultur. Fitur ini mempertemukan petani dengan restoran, hotel, dan perusahaan melalui sistem pencocokan otomatis cerdas. Berdasarkan lokasi dan skala produksi, MITRAni memastikan distribusi produk tani menjadi lebih efisien, terarah, dan saling menguntungkan.",
    textColor: "text-black"
  },
  {
    title: "BOTani (Analisis Tani)",
    tagline: "Bertani Cerdas dengan Analisis AI Terpercaya.",
    desc: "Hilangkan spekulasi, mulailah beraksi dengan data. BOTani adalah fitur analisis cerdas yang menyajikan tren pasar dan rekomendasi harga aktual secara real-time. Dengan BOTani, petani dapat memahami dinamika permintaan pasar dengan lebih mudah, sehingga strategi distribusi dan penentuan harga menjadi lebih tepat sasaran.",
    textColor: "text-black"
  },
  {
    title: "Lapor",
    tagline: "Transparansi dan Kualitas yang Terjaga.",
    desc: "Integritas adalah kunci utama dalam PORTANI. Fitur Lapor menyediakan sistem pengaduan yang cepat dan akuntabel bagi konsumen. Dengan dukungan bukti digital yang kuat, fitur ini berfungsi sebagai instrumen kontrol kualitas yang memastikan petani, kurir, hingga mitra pengemasan selalu memberikan performa terbaik bagi pelanggan.",
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

export default function FeatureSectionPortani() {
  return (
    <section className="py-20">
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} />
      ))}
    </section>
  );
}