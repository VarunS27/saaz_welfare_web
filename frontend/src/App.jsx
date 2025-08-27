import React, { useState, useEffect } from 'react';
import './index.css'
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Events from './components/pages/Events';
import grp from './components/pages/assets/grp.jpg';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden"
         style={{
           backgroundImage: `url(${grp})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundAttachment: 'fixed'
         }}>
      
      {/* Same overlay as coming soon page */}
      <div className="absolute inset-0 z-0"
           style={{
             background: `
               radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.4) 0%, transparent 50%),
               radial-gradient(ellipse at top right, rgba(249, 147, 30, 0.4) 0%, transparent 50%),
               radial-gradient(ellipse at bottom left, rgba(6, 255, 165, 0.4) 0%, transparent 50%),
               radial-gradient(ellipse at bottom right, rgba(93, 76, 219, 0.4) 0%, transparent 50%),
               radial-gradient(ellipse at center, rgba(196, 76, 219, 0.3) 0%, transparent 70%),
               linear-gradient(135deg, 
                 rgba(255, 107, 53, 0.6) 0%, 
                 rgba(249, 147, 30, 0.6) 12%, 
                 rgba(255, 210, 63, 0.6) 24%, 
                 rgba(6, 255, 165, 0.6) 36%, 
                 rgba(31, 179, 211, 0.6) 48%, 
                 rgba(93, 76, 219, 0.6) 60%, 
                 rgba(196, 76, 219, 0.6) 72%, 
                 rgba(255, 107, 157, 0.6) 84%, 
                 rgba(255, 107, 53, 0.6) 100%)
             `,
             backgroundSize: '400% 400%',
             animation: 'gradientFlow 15s ease-in-out infinite'
           }}>
      </div>


      
      <div className="relative z-20">
        <Navbar />
        
        <Home />
        <AboutUs />
        <Events />



        <section id="gallery" className="min-h-screen py-20 px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-white/50 shadow-xl">
              <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Gallery</h2>
              <p className="text-gray-700 text-xl max-w-4xl mx-auto">
                See our work in action through these memorable moments...
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-white/50 shadow-xl">
              <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Contact Us</h2>
              <p className="text-gray-700 text-xl max-w-4xl mx-auto">
                Get in touch with us to learn more about our mission...
              </p>
            </div>
          </div>
        </section>

        <section id="donate" className="min-h-screen py-20 px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-white/50 shadow-xl">
              <h2 className="text-4xl font-bold text-[#228B22] mb-8">Support Our Cause</h2>
              <p className="text-gray-700 text-xl max-w-4xl mx-auto">
                Your donation helps us continue our welfare activities...
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
         100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}

export default App;