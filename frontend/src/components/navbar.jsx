import SkyLogo from "../assets/skylogo.png";

export default function Navbar() {
  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        
        {/* Logo with text below */}
        <div className="flex flex-col items-center gap-1">
          <img
            src={SkyLogo}
            alt="Sky Touch Academy logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xs font-semibold">
            Sky Touch Academy
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Courses</a>
          <a href="#" className="hover:text-blue-400 transition">Workshops</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* CTA */}
        <button
          className="
            px-5 py-2 rounded-xl text-sm font-medium
            bg-gradient-to-r from-blue-500 to-blue-700
            hover:opacity-90 transition
          "
        >
          Enroll Now
        </button>
      </div>
    </header>
  );
}
