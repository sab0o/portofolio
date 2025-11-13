import "./globals.css";

export const metadata = {
  title: "Sabita Khansa Dewi | Portfolio",
  description: "Portfolio website of Sabita Khansa Dewi, Informatics Engineer & UI/UX Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}
