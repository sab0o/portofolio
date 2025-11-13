export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1f1f1f] text-[#ffffff] py-[50px] px-[50px] rounded-t-3xl"
    >
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/logo-putih.png"
          alt="Logo Sabita"
          className="w-[50px] mb-4"
        />
      </div>

      {/* Text */}
      <p className="mb-4 text-lg">Get to know me here</p>

      {/* Social Media Icons */}
      <div className="flex gap-[15px] mb-6">
        <a
          href="https://linkedin.com/in/sabitakhansadewi"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="w-6 invert" />
        </a>

        <a
          href="https://instagram.com/sabitakhnsa"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <img src="/instagram.png" alt="Instagram" className="w-6 invert" />
        </a>

        <a
          href="https://github.com/sab0o"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img src="/github.png" alt="GitHub" className="w-6 invert" />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sabitakhansadewi@gmail.com"
          rel="noopener noreferrer"
          title="Email"
        >
          <img src="/gmail.png" alt="Email" className="w-6 invert" />
        </a>
      </div>

      {/* White line */}
      <hr className="border-t border-[#475467] mb-4 w-full" />

      {/* Copyright */}
      <p className="text-sm opacity-80">
        © Copyright 2025 Sabita Khansa Dewi, All Rights Reserved
      </p>
    </footer>
  );
}
