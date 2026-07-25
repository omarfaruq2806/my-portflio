import Skill from "./Skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#001418] text-white px-6 py-20 border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-[rgb(0,222,238)]">Skills</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(0,222,238)]">
              Frontend
            </h3>

            <div className="space-y-3">
              <Skill name="TypeScript" level="80%" />
              <Skill name="JavaScript (ES6+)" level="88%" />
              <Skill name="React.js" level="90%" />
              <Skill name="Next.js" level="88%" />
              <Skill name="HTML5" level="95%" />
              <Skill name="CSS3 / Tailwind CSS" level="90%" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(0,222,238)]">
              Backend
            </h3>

            <div className="space-y-3">
              <Skill name="Express.js" level="80%" />
              <Skill name="MongoDB" level="78%" />
              <Skill name="Better Auth" level="80%" />
              <Skill name="REST API" level="85%" />
              <Skill name="Node.js" level="70%" />
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(0,222,238)]">
              Tools
            </h3>

            <div className="space-y-3">
              <Skill name="Git & GitHub" level="90%" />
              <Skill name="VS Code" level="95%" />
              <Skill name="Vercel" level="85%" />
              <Skill name="Figma" level="75%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
