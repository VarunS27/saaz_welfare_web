import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { getCloudinaryUrl } from '../../config/cloudinary';
import { IMAGES, FALLBACK_IMAGES, DIRECT_URLS } from '../../constants/images';
import { useDonateModal } from "./Donate";

const navLinks = [
  { name: "Home", target: "home" },
  { name: "About", target: "about" },
  { name: "Events", target: "events" },
  { name: "Gallery", target: "gallery" },
  { name: "Contact US", target: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { openDonate, DonateModal } = useDonateModal();

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDonateClick = () => {
    openDonate();
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      const sections = navLinks.map(link => link.target);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Get logo image with fallback
  const logoSrc = DIRECT_URLS.logo || FALLBACK_IMAGES.logo;
  
  // Get guru strip image
  const guruStripSrc = DIRECT_URLS.guruStrip || getCloudinaryUrl(IMAGES.guruStrip.str, 'w_500,h_40,c_fit,q_auto,f_auto');

  return (
    <>
      <header
        className={`w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 lg:py-2.5 fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src={logoSrc}
            alt="Saaz Welfare Foundation Logo"
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            onError={(e) => {
              console.log('Logo failed to load, using fallback');
              e.target.src = FALLBACK_IMAGES.logo;
            }}
          />
        </div>

        {/* Guru Strip - Between Logo and Navigation (Desktop Only) */}
        <div className="hidden lg:flex flex-shrink-0 mx-3">
          <img
            src={guruStripSrc}
            alt="Guru Blessing"
            className="h-8 xl:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            onError={(e) => {
              console.log('Guru strip failed to load');
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className={`relative font-medium text-sm xl:text-base px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg transition-all duration-300 cursor-pointer group ${
                activeSection === link.target
                  ? "text-[#6A0DAD] bg-[#6A0DAD]/10"
                  : "text-slate-700 hover:text-[#6A0DAD] hover:bg-[#6A0DAD]/5"
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#6A0DAD] transition-all duration-300 group-hover:w-full ${
                activeSection === link.target ? "w-full" : ""
              }`}></span>
            </button>
          ))}
        </nav>

        {/* Guru Strip - Between Contact Us and Donate (Desktop Only) */}
        <div className="hidden lg:flex flex-shrink-0 mx-3">
          <img
            src={guruStripSrc}
            alt="Guru Blessing"
            className="h-8 xl:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            onError={(e) => {
              console.log('Guru strip failed to load');
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Desktop Donate Button */}
        <div className="hidden lg:flex flex-shrink-0 items-center">
          <button
            onClick={handleDonateClick}
            className="bg-[#c98d32] hover:bg-orange-600 text-white font-semibold text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center group"
          >
            <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#6A0DAD] hover:bg-slate-100 transition-all duration-300 mobile-menu-container"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out mobile-menu-container ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center">
              {/* Guru Strip in Mobile Header */}
              <img
                src={guruStripSrc}
                alt="Guru Blessing"
                className="h-6 w-auto object-contain mr-3 opacity-80"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <h2 className="text-lg font-bold text-[#c98d32]">Saaz Welfare</h2>
                <p className="text-sm text-green-600 font-medium">Foundation</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className={`w-full text-left px-4 py-4 rounded-xl font-medium text-base transition-all duration-300 flex items-center group ${
                      activeSection === link.target
                        ? "bg-[#c98d32] text-white shadow-lg"
                        : "text-slate-700 hover:bg-slate-100 hover:text-[#c98d32]"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                      activeSection === link.target 
                        ? "bg-white" 
                        : "bg-slate-300 group-hover:bg-[#c98d32]"
                    }`}></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Donate Button with Guru Strip */}
          <div className="p-6 border-t border-slate-200">
            {/* Guru Strip before donate button */}
            <div className="flex justify-center mb-4">
              <img
                src={guruStripSrc}
                alt="Guru Blessing"
                className="h-8 w-auto object-contain opacity-80"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <button
              onClick={handleDonateClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-base py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Make a Donation
            </button>
            
            {/* Contact Info */}
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-500">
                Questions? Call us at
              </p>
              <p className="text-sm font-semibold text-[#c98d32]">
                <a href="tel:7666884823">+91 76668 84823</a> <br />
                <a href="tel:8779823714">+91 87798 23714</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Donate Modal */}
      <DonateModal />
    </>
  );
}