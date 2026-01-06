import React from "react";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import SkyLogo from "../assets/skylogo.png"; // <- import logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 w-full">
      
      {/* Main Content */}
      <div className="w-full px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
          
          {/* Brand Section */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2"> {/* <- flex-row */}
              <img src={SkyLogo} alt="Sky Touch Academy Logo" className="h-12 w-15 object-contain" />
              <span className="text-white font-semibold text-xl">Sky Touch Academy</span>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Empowering professionals with cutting-edge digital marketing skills.
              Join thousands of successful graduates who have transformed their
              careers with our expert-led programs.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <a href="#" className="hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Courses</a></li>
              <li><a href="#" className="hover:text-white transition">Workshops</a></li>
              <li><a href="#" className="hover:text-white transition">Free Courses</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition">Career Services</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="px-6 lg:px-20 py-4 text-center md:text-left">
          <p className="text-xs text-slate-500">
            © 2025 Sky Touch Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
