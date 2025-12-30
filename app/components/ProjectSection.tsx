import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="px-[68px] py-[100px] bg-gray-50">
      {/* === JUDUL DAN TOMBOL CV === */}
      <div className="flex justify-between items-center mb-12 py-[30px]">
        <h2 className="text-[50px] font-bold font-mono">My Projects</h2>
        <a
          href="/cv.pdf"
          target="_blank"
          className="bg-[#000000] text-[#FFFFFF]
            px-[25px] py-[10px] text-lg
            rounded-full
            font-mono text-base font-semibold
            hover:bg-[#505050] hover:opacity-100 transition-all duration-800 hover:scale-105
            shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            flex items-center justify-center"
        >
          Curriculum Vitae
        </a>
      </div>

      {/* === GRID CARD PROJECT === */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[21px]">
        <ProjectCard
          title="ThinkPop"
          desc="Interactive hybrid experience merging holographic storytelling with a quiz app."
          image="thinkpop.png"
          link="/projects/thinkpop"
        />
        <ProjectCard
          title="Allevio"
          desc="Mental health app combining mood tracking, AI chatbot, and meditation."
          image="allevio.png"
          link="/projects/allevio"
        />
        <ProjectCard
          title="SAKUIN"
          desc="Smart financial app designed to help you manage your income wisely and secure a better future."
          image="sakuin.png"
          link="/projects/sakuin"
        />
        <ProjectCard
          title="DOMPY"
          desc="Smart digital wallet for the intelligent fintech generation, making financial management easier and more innovative."
          image="dompy.png"
          link="/projects/dompy"
        />
        <ProjectCard
          title="SIGMA (Siaga Malang)"
          desc="Rapid-response application for reporting incidents, accessing emergency services, and providing public safety information."
          image="sigma.png"
          link="/projects/sigma"
        />
        <ProjectCard
          title="PORTANI"
          desc="Collaborative agricultural platform empowering farmers to grow together and build a better nation."
          image="portani.png"
          link="/projects/portani"
        />
      </div>
    </section>
  );
}
