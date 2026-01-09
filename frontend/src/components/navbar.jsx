import { useState } from "react";
import SkyLogo from "../assets/skylogo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Courses", "Workshops", "About", "Contact Us"];

  // ✅ SAME SCROLL LOGIC FROM 1st CODE
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn("Section not found:", id);
      return;
    }

    const yOffset = -96; // navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black text-white">
      <div className="w-full px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
  className="flex flex-col items-center cursor-pointer -mt-2"
  onClick={() => scrollToSection("home")}
>
  <img
    src={SkyLogo}
    alt="Sky Touch Academy"
    className="h-20 w-15 mb-2"
  />
  <span className="text-lg font-medium leading-none -mt-1">
    Sky Touch Academy
  </span>
</div>


        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-16 text-lg font-medium">

          {links.map((link) => (
            <button
              key={link}
              onClick={() =>
                scrollToSection(link.toLowerCase().replace(" ", ""))
              }
              className="hover:text-blue-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Enroll Button (unchanged) */}
        <div className="hidden md:block">
          <button className="px-10 py-3 rounded-xl bg-blue-600 text-sm font-semibold">
            Enroll Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-8 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link}
              className="text-left text-base hover:text-blue-400"
              onClick={() => {
                scrollToSection(link.toLowerCase().replace(" ", ""));
                setIsOpen(false);
              }}
            >
              {link}
            </button>
          ))}

          <button
            className="px-10 py-3 rounded-lg bg-blue-600 text-sm font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
}
