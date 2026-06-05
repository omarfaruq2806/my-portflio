import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#001418] text-white px-6 relative">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,222,238,0.15),transparent_60%)]" />

      {/* FIX: max width control (important) */}
      <div className="relative mx-auto w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-[rgb(0,222,238)]">Omar</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Frontend Developer | React | Next.js
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="bg-[rgb(0,222,238)] text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-[rgb(0,222,238)] text-[rgb(0,222,238)]  bg-[#001418]/20 px-6 py-3 rounded-md hover:scale-105 transition"
            >
              View Resume
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="https://github.com/omarfaruq2806"
              target="_blank"
              className="px-4 py-2 rounded-md border border-white/10 text-gray-300 hover:text-[rgb(0,222,238)] hover:border-[rgb(0,222,238)] transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/omarfaruk28/"
              target="_blank"
              className="px-4 py-2 rounded-md border border-white/10 text-gray-300 hover:text-[rgb(0,222,238)] hover:border-[rgb(0,222,238)] transition"
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/omarfaruk2806"
              target="_blank"
              className="px-4 py-2 rounded-md border border-white/10 text-gray-300 hover:text-[rgb(0,222,238)] hover:border-[rgb(0,222,238)] transition"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-[rgb(0,222,238)] blur-3xl opacity-20" />

            <Image
              src="/myimg.jpeg"
              alt="profile"
              width={320}
              height={320}
              className="rounded-full border-4 border-[rgb(0,222,238)] object-cover w-[220px] h-[220px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
