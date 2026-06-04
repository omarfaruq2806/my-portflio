export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#001418] text-white px-6 py-20 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center">
          Get In <span className="text-[rgb(0,222,238)]">Touch</span>
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Feel free to contact me anytime. I’ll reply as soon as possible.
        </p>

        {/* CONTACT CARD */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* EMAIL */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[rgb(0,222,238)] transition">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="text-gray-400 mt-2">mdomarfaruq2806@gmail.com</p>
          </div>

          {/* PHONE */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[rgb(0,222,238)] transition">
            <h2 className="text-lg font-semibold">Phone</h2>
            <p className="text-gray-400 mt-2">+880 1842670257</p>
          </div>

          {/* WHATSAPP */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[rgb(0,222,238)] transition">
            <h2 className="text-lg font-semibold">WhatsApp</h2>
            <p className="text-gray-400 mt-2">+880 1842670257</p>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="mailto:mdomarfaruq2806@gmail.com"
            className="px-6 py-3 rounded-md bg-[rgb(0,222,238)] text-black font-semibold hover:opacity-90"
          >
            Send Email
          </a>

          <a
            href="https://wa.me/880182670257"
            target="_blank"
            className="px-6 py-3 rounded-md border border-white/20 hover:border-[rgb(0,222,238)]"
          >
            WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
}
