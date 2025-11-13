"use client";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-6 left-1/2 -translate-x-1/2
        w-[90%] max-w-6xl
        bg-[#ffffff] text-black
        rounded-full
        flex flex-wrap items-center justify-between
        px-10 py-4
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        z-[9999]
      "
    >
      {/* === LOGO === */}
      <div className="flex items-center gap-[37px] pl-[30px]">
        <img src="/logo.png" alt="Sabita Logo" className="h-10" />
      </div>

      {/* === MENU === */}
      <div className="flex items-center gap-[48px] font-medium bg-white">
        <a
          href="#about"
          className="text-black no-underline hover:opacity-70 transition"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-black no-underline hover:opacity-70 transition"
        >
          Project
        </a>
      </div>


      {/* === BUTTON HIRE ME === */}
      <div className="flex items-center pr-[20px]">
        <a
          href="#contact"
          className="
            bg-[#000000] text-[#FFFFFF]
            px-[25px] py-[10px] text-lg
            rounded-full
            font-mono text-base font-semibold
            hover:bg-[#505050] hover:opacity-100 transition-all duration-500 hover:scale-105
            shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            flex items-center justify-center
          "
        >
          Hire Me!
        </a>
      </div>

    </nav>
  );
}
