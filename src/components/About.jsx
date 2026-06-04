export default function About() {
  return (
    <section id="about" className="bg-[#001418] text-white py-20 border-t border-white/10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-[rgb(0,222,238)]">Me</span>
        </h2>

        {/* Content */}
        <p className="text-gray-300 leading-relaxed text-lg">
          I am a passionate Frontend Developer focused on building modern,
          responsive, and user-friendly web applications using React and
          Next.js. My journey in programming started with curiosity about how
          websites work, and over time it turned into a deep passion for
          creating real-world projects.
        </p>

        <p className="text-gray-400 leading-relaxed mt-5">
          I enjoy working on UI development, crafting clean designs, and turning
          ideas into functional products. I love solving problems and
          continuously improving my coding skills by building new projects and
          learning modern web technologies.
        </p>

        <p className="text-gray-400 leading-relaxed mt-5">
          Outside of programming, I enjoy sports, especially running and fitness
          activities. I also like exploring new design ideas, watching tech
          content, and sometimes experimenting with creative UI designs. This
          helps me stay motivated and think more creatively in development.
        </p>

        {/* Personality tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10">
            Problem Solver
          </span>

          <span className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10">
            UI Enthusiast
          </span>

          <span className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10">
            Fast Learner
          </span>

          <span className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10">
            Team Player
          </span>
        </div>
      </div>
    </section>
  );
}
