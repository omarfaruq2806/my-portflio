import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="bg-[#001418] text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10">
          My <span className="text-[rgb(0,222,238)]">Projects</span>
        </h1>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-[rgb(0,222,238)] transition"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,222,238,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition" />

              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 relative">
                {/* Name */}
                <h2 className="text-xl font-semibold group-hover:text-[rgb(0,222,238)] transition">
                  {p.name}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href={`/projects/${p.id}`}
                  className="inline-block mt-5 text-[rgb(0,222,238)] hover:underline font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
