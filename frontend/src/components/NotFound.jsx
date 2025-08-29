import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Search, Home, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Back Button - Top Left */}
      <button
        onClick={goBack}
        className="fixed top-6 left-6 z-50 group bg-white/90 backdrop-blur-sm text-[#6A0DAD] p-3 rounded-full hover:bg-[#6A0DAD] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/50"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#6A0DAD] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#228B22] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] opacity-3 rounded-full blur-3xl"></div>
      
      {/* Floating hearts */}

      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        
        {/* Main 404 Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
          
          {/* 404 Number with animation */}
          <div className="relative mb-8">
            <h1 className="text-[120px] md:text-[200px] font-bold text-transparent bg-gradient-to-r from-[#6A0DAD] via-purple-500 to-[#228B22] bg-clip-text leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Oops! Page Not Found
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#228B22] to-[#6A0DAD] rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off. 
              Don't worry, even our best volunteers sometimes take a wrong turn! 
              Let's get you back to helping our community.
            </p>
          </div>

          {/* Suggested Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Search className="w-8 h-8 text-[#6A0DAD] mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Check URL</h3>
              <p className="text-sm text-slate-600">Make sure the web address is correct</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Home className="w-8 h-8 text-[#228B22] mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Go Home</h3>
              <p className="text-sm text-slate-600">Return to our main page</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Contact Us</h3>
              <p className="text-sm text-slate-600">Let us know about this issue</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;