"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Kolektin",
    tagline: "Wujudkan Mimpi Besar Melalui Kekuatan Kolaborasi.",
    desc: "Kolektin merevolusi cara Anda menabung dengan sistem grup yang transparan dan aman. Dilengkapi dengan AI Saving Coach, fitur ini tidak hanya menyediakan progress bar untuk memantau pencapaian kelompok secara real-time, tetapi juga memberikan wawasan cerdas agar target finansial tercapai lebih efektif. Terintegrasi langsung dengan mitra perbankan, Kolektin memastikan setiap rupiah Anda terkelola dengan bijak demi membangun budaya menabung yang berkelanjutan.",
    textColor: "text-black"
  },
  {
    title: "Spendle",
    tagline: "Benteng Pintar dari Godaan Belanja Impulsif.",
    desc: "Spendle adalah asisten disiplin yang membantu Anda membedakan antara keinginan sesaat dan kebutuhan produktif. Melalui fitur Cooling Period Timer selama 24 jam dan sistem voting grup, setiap transaksi besar Anda akan mendapatkan peninjauan objektif dari komunitas. Fitur ini mendorong pola konsumsi yang lebih bertanggung jawab, memastikan dana Anda dialihkan untuk hal-hal yang benar-benar memberikan nilai jangka panjang.",
    textColor: "text-black"
  },
  {
    title: "DoMatch",
    tagline: "Hubungkan Ambisi, Perkuat Literasi Finansial Bersama.",
    desc: "Belajar finansial kini tidak lagi terasa sendirian. DoMatch adalah fitur matchmaking unik yang mempertemukan Anda dengan individu yang memiliki visi dan tujuan keuangan serupa. Di sini, Anda dapat saling berbagi tips, mengikuti tantangan menabung, dan memperluas jaringan inklusif yang mendukung pertumbuhan literasi keuangan. Bersama DoMatch, akses terhadap pendidikan finansial menjadi lebih relevan, inklusif, dan mudah dijangkau.",
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