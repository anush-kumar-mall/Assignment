import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import
import SkyLogo from "../assets/skylogo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ hook

  const links = ["Home", "Courses", "Workshops", "About", "Contact"];

  // 🔥 BULLETPROOF SCROLL FUNCTION
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn("Section not found:", id);
      return;
    }

    const yOffset = -96; // navbar height offset
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full bg-black text-white fixed top-0 z-50 shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex flex-col items-center gap-1 cursor-pointer -m-2"
          onClick={() => scrollToSection("home")}
        >
          <img src={SkyLogo} alt="Sky Touch Academy logo" className="h-10 w-10 object-contain" />
          <span className="text-xs font-semibold">Sky Touch Academy</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="hover:text-blue-400 transition relative"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          className="hidden md:block px-5 py-2 rounded-xl text-sm font-medium
                     bg-gradient-to-r from-blue-500 to-blue-700"
          onClick={() => {
            navigate("/enroll");      // ✅ navigate to enroll page
            window.scrollTo(0, 0);    // ✅ scroll to top
          }}
        >
          Enroll Now
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-4 space-y-4">
          {links.map((link) => (
            <button
              key={link}
              className="block w-full text-left"
              onClick={() => {
                scrollToSection(link.toLowerCase());
                setIsOpen(false);
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
