"use client";

import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20 bg-white">
      <div className="flex flex-row items-center justify-between w-full max-w-6xl">

        {/* FOTO + TOMBOL */}
        <div className="relative flex justify-center items-center w-[45%]">
        {/* Gambar utama */}
        <img
            src="/sabita.png"
            alt="Sabita Khansa Dewi"
            className="w-[320px] md:w-[360px] lg:w-[400px] z-10 relative"
        />

        {/* Tombol Get To Know More — nimpa bagian bawah foto */}
        <a
            href= "#projects"
            className="
            absolute bottom-[-10px]
            bg-[#000000] text-[#FFFFFF]
            px-[70px] py-[12px]
            rounded-full font-mono text-sm
            flex items-center gap-2
            hover:bg-[#505050] hover:opacity-100 transition-all duration-500 hover:scale-105
            z-20
            "
        >
            Get To Know More →
        </a>

        {/* Logo Figma */}
        <img
            src="/figma-logo.png"
            alt="Figma"
            className="absolute left-[160px] top-[60px] w-8 md:w-10 z-0"
        />

        {/* Logo VSCode */}
        <img
            src="/vscode-logo.png"
            alt="VSCode"
            className="absolute right-[150px] bottom-[200px] w-8 md:w-10 z-0"
        />
        </div>

        
        {/* === KANAN: TEKS === */}
        <div className="flex flex-col gap-[5px] w-[50%] text-left pr-[100px]">
          <h1 className="text-[50px] sm:text-5xl font-bold font-mono">
            Hey there!
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
            I'm <span className="font-semibold">Sabita Khansa Dewi</span>, an Informatics Engineering student from Universitas Brawijaya. 
            I'm passionate about crafting smooth, eye-catching interfaces that make users feel right at home. 
            I love learning new things, tackling challenges, and bringing creative ideas to life through design and code.
          </p>

          {/* Ikon Sosial */}
          <div className="flex gap-[26px] text-[30px] mt-[13px]">
            <a href="https://linkedin.com/in/sabitakhansadewi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 duration-500 hover:scale-105">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/sabitakhnsa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 duration-500 hover:scale-105">
              <FaInstagram />
            </a>
            <a href="https://github.com/sab0o" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 duration-500 hover:scale-105">
              <FaGithub />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabitakhansadewi@gmail.com" className="hover:text-gray-900 duration-500 hover:scale-105">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
