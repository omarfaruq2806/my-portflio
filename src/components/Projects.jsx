import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#001418] text-white px-6 py-20 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-[rgb(0,222,238)]">Projects</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl">
              A selection of projects showcasing my experience in building
              modern, scalable, and user-friendly web applications with React,
              Next.js, and Node.js.
            </p>
          </div>

          <Link
            href="/projects"
            className="hidden md:inline-flex border border-[rgb(0,222,238)] text-[rgb(0,222,238)] px-5 py-2 rounded-lg hover:bg-[rgb(0,222,238)] hover:text-black transition"
          >
            View All
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-[rgb(0,222,238)] transition duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,222,238,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-semibold group-hover:text-[rgb(0,222,238)] transition">
                  {p.name}
                </h3>

                <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                  {p.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border border-white/10 bg-[#03252d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${p.id}`}
                  className="inline-flex items-center mt-6 text-[rgb(0,222,238)] font-medium hover:gap-3 gap-2 transition-all"
                >
                  View Details
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex border border-[rgb(0,222,238)] text-[rgb(0,222,238)] px-6 py-3 rounded-lg hover:bg-[rgb(0,222,238)] hover:text-black transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
