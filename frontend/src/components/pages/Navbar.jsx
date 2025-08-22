import React from "react";

const navLinks = [
  { name: "Home", target: "home" },
  { name: "About", target: "about" },
  { name: "Events", target: "events" },
  { name: "Gallery", target: "gallery" },
  { name: "Contact US", target: "contact" },
];

export default function Navbar() {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-between pt-0 mt-10 px-8 fixed top-0 left-0 z-50 bg-white">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="w-30 h-20 object-cover shadow-md rounded-lg"
        />
      </div>

      {/* Rectangle Navbar */}
      <nav className="bg-[#F8F8F8] shadow-xl rounded-2xl flex items-center gap-8 px-10 py-4 min-w-[700px] backdrop-blur-sm bg-opacity-95">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.target)}
            className="font-medium text-base px-5 py-2 rounded-lg transition-all duration-300 text-[#6A0DAD] hover:bg-[#6A0DAD] hover:text-white hover:shadow-lg transform hover:scale-105 cursor-pointer"
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Donate Button */}
      <div className="flex-shrink-0 flex items-center">
        <button
          onClick={() => scrollToSection("donate")}
          className="bg-[#228B22] text-white font-semibold text-base px-8 py-3 rounded-xl shadow-lg hover:bg-[#1e7a1e] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Donate
        </button>
      </div>
    </div>
  );
}
