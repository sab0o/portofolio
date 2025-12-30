import Link from "next/link";
export default function ProjectCard({
  title,
  desc,
  image,
  link,
}: {
  title: string;
  desc: string;
  image: string;
  link: string;
}) {
  return (
    <div className="bg-[#ffffff] p-[45px] rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between">
      {/* Gambar Project */}
      <div className="h-[197px] w-[350px] bg-gray-200 rounded-[20px] overflow-hidden flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Teks Project */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 text-justify mb-4 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Tombol */}
        <Link
          href={link}
          rel="noopener noreferrer"
          className="bg-[#000000] text-[#FFFFFF]
            px-[10px] py-[10px] text-lg
            rounded-full
            font-mono text-base font-semibold
            hover:bg-[#505050] hover:opacity-100 transition-all duration-800 hover:scale-105
            shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            flex items-center justify-center"
        >
          More →
        </Link>
      </div>
    </div>
  );
}
