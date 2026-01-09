import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkyLogo from "../assets/skylogo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const links = ["Home", "Courses", "Workshops", "About", "Contact Us"];

  // Mapping of link text → section id
  const linkToId = {
    Home: "home",
    Courses: "courses",
    Workshops: "workshops",
    About: "footer",      // <-- Now About scrolls to footer
    "Contact Us": "footer",
  };

  // Scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) {
      console.warn("Section not found:", id);
      return;
    }

    const yOffset = -96; // navbar height
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

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
            className="h-20 w-15 mb-2 -translate-y-1"
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
              onClick={() => scrollToSection(linkToId[link])}
              className="hover:text-blue-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Enroll Button */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              navigate("/enroll");
              window.scrollTo(0, 0);
            }}
            className="px-10 py-3 rounded-xl bg-blue-600 text-sm font-semibold"
          >
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
                scrollToSection(linkToId[link]);
                setIsOpen(false);
              }}
            >
              {link}
            </button>
          ))}

          <button
            className="px-10 py-3 rounded-lg bg-blue-600 text-sm font-semibold"
            onClick={() => {
              navigate("/enroll");
              setIsOpen(false);
            }}
          >
            Enroll Now
          </button>
        </div>
      )}
    </header>
  );
}
