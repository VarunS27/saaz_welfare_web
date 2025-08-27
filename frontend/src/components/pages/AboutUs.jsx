import React from 'react';
import { Heart, Users, Target, Globe, Award, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-8 relative overflow-hidden">
      {/* Simple gradient background */}

      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#6A0DAD] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#228B22] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] opacity-3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            About <span className="text-[#6A0DAD]">Saaz Welfare</span> Foundation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#228B22] to-[#6A0DAD] rounded-full mx-auto"></div>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* About Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative w-full h-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <img
                src="/logo.jpg"
                alt="About Saaz Welfare"
                className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23F8F8F8'/%3E%3Ccircle cx='200' cy='160' r='40' fill='%236A0DAD' opacity='0.3'/%3E%3Crect x='160' y='220' width='80' height='100' fill='%23228B22' opacity='0.3' rx='10'/%3E%3Ctext x='200' y='350' text-anchor='middle' fill='%236A0DAD' font-size='16' font-weight='bold'%3ESaaz Welfare%3C/text%3E%3Ctext x='200' y='370' text-anchor='middle' fill='%236A0DAD' font-size='14'%3EFoundation%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* QR Code and Donate Section */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#228B22]/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#228B22]" />
                </div>
                <h3 className="text-2xl font-bold text-[#6A0DAD]">Quick Donation</h3>
              </div>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="w-44 h-44 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-[#228B22]/20 hover:border-[#228B22]/40 transition-colors duration-300">
                  <img
                    src="/qr-code.png"
                    alt="QR for Payment"
                    className="w-36 h-36 object-contain"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='144' height='144' viewBox='0 0 144 144'%3E%3Crect width='144' height='144' fill='white' stroke='%23228B22' stroke-width='2' rx='8'/%3E%3Crect x='12' y='12' width='24' height='24' fill='%23228B22'/%3E%3Crect x='12' y='48' width='24' height='24' fill='%23228B22'/%3E%3Crect x='48' y='12' width='24' height='24' fill='%23228B22'/%3E%3Crect x='108' y='12' width='24' height='24' fill='%23228B22'/%3E%3Crect x='108' y='48' width='24' height='24' fill='%23228B22'/%3E%3Crect x='12' y='108' width='24' height='24' fill='%23228B22'/%3E%3Crect x='48' y='108' width='24' height='24' fill='%23228B22'/%3E%3Crect x='108' y='108' width='24' height='24' fill='%23228B22'/%3E%3Ctext x='72' y='80' text-anchor='middle' fill='%23228B22' font-size='10' font-weight='bold'%3EQRF%3C/text%3E%3Ctext x='72' y='92' text-anchor='middle' fill='%23228B22' font-size='8'%3EPayment%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <div className="text-center space-y-3">
                  <p className="text-slate-600 text-sm">Scan to make a quick donation</p>
                  <button 
                    onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group bg-gradient-to-r from-[#228B22] to-[#1e7a1e] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#1e7a1e] hover:to-[#228B22] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Donate Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Cards Section with Enhanced Design */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Who are We Card */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6A0DAD] to-purple-500"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#6A0DAD]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#6A0DAD] group-hover:text-white transition-all duration-300">
                <Users className="w-6 h-6 text-[#6A0DAD] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#6A0DAD]">Who We Are</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Saaz Welfare is a dedicated organization committed to serving communities through 
              comprehensive welfare programs. We are a team of passionate individuals who believe 
              in creating positive change through collective action. Our organization focuses on 
              bridging social gaps and providing essential support to those who need it most.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#228B22] to-green-500"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#228B22]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#228B22] group-hover:text-white transition-all duration-300">
                <Target className="w-6 h-6 text-[#228B22] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#228B22]">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to empower communities through education, healthcare, and social 
              development initiatives. We strive to create sustainable solutions that address 
              the root causes of social issues. We believe in fostering self-reliance and 
              building capacity within communities.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6A0DAD] to-[#228B22]"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6A0DAD]/10 to-[#228B22]/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#6A0DAD] group-hover:to-[#228B22] transition-all duration-300">
                <Globe className="w-6 h-6 text-[#6A0DAD] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#6A0DAD] to-[#228B22] bg-clip-text text-transparent">Our Vision</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We envision a world where every individual has equal opportunities to thrive and 
              succeed. Our vision is to build resilient communities that can sustain themselves 
              and support their members effectively. We see a future where social inequalities 
              are minimized.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center  backdrop-blur-sm p-12 rounded-3xl border border-slate-200 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[#6A0DAD]" />
            <h2 className="text-4xl font-bold text-white">
              Let's Make a Difference <span className="text-[#6A0DAD]">Together</span>
            </h2>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#228B22] via-[#6A0DAD] to-[#228B22] rounded-full mx-auto mb-8"></div>
          

          
          <div className="flex justify-center gap-6 flex-wrap">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-[#6A0DAD] to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-[#6A0DAD] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Get Involved
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-[#228B22] bg-white/70 text-[#228B22] px-10 py-4 rounded-2xl font-semibold hover:bg-[#228B22] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              View Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;