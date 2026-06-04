export default function Footer() {
  return (
    <footer className="bg-[#001418] border-t border-white/10 text-white px-6 py-10">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold">
            Omar<span className="text-[rgb(0,222,238)]">.dev</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Frontend Developer building modern web applications.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#about" className="hover:text-[rgb(0,222,238)]">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[rgb(0,222,238)]">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[rgb(0,222,238)]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[rgb(0,222,238)]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: mdomarfaruq2806@gmail.com</li>
            <li>Phone: +880 01842670257</li>
            <li>Location: Dhaka , Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-white/10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Omar.dev. All rights reserved.
      </div>
    </footer>
  );
}
