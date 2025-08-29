import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#6A0DAD] via-[#228B22] to-[#6A0DAD]"></div>
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-8 h-8 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-bold">©</span>
            </div>
            <span className="text-sm font-medium">
              2025 - 26 <span className="text-white font-semibold">Saaz Welfare Foundation</span>. All rights reserved.
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-8">
            
            {/* Social Media */}
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm font-medium mr-3">Follow Us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-9 h-9 bg-slate-700/60 hover:bg-slate-600/80 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6A0DAD]/20 to-[#228B22]/20 hover:from-[#6A0DAD]/30 hover:to-[#228B22]/30 rounded-lg text-slate-300 hover:text-white transition-all duration-300 group border border-slate-600/50 hover:border-slate-500"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Additional Info Line */}
        
      </div>

 </footer>
  );
};

export default Footer;