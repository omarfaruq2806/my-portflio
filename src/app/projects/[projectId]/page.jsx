import projects from "@/data/projects";
import Image from "next/image";

export default async function ProjectDetails({ params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id == projectId);

  if (!project) {
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <section className="bg-[#001418] text-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="mt-10">
          <h1 className="text-4xl font-bold text-[rgb(0,222,238)]">
            {project.name}
          </h1>

          <p className="text-gray-400 mt-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* TECH */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Main Technology Stack</h2>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href={project.live}
            target="_blank"
            className="px-5 py-2 rounded-md bg-[rgb(0,222,238)] text-black font-semibold"
          >
            Live Project
          </a>

          <a
            href={project.client}
            target="_blank"
            className="px-5 py-2 rounded-md border border-white/20 hover:border-[rgb(0,222,238)]"
          >
            GitHub Repo
          </a>
        </div>

        {/* CHALLENGES */}
        <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold text-[rgb(0,222,238)]">
            Challenges Faced
          </h2>
          <p className="text-gray-400 mt-3">{project.challenges}</p>
        </div>

        {/* IMPROVEMENTS */}
        <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold text-[rgb(0,222,238)]">
            Future Improvements
          </h2>
          <p className="text-gray-400 mt-3">{project.improvements}</p>
        </div>
      </div>
    </section>
  );
}
