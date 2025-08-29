import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Events from './components/pages/Events';
import NotFound from './components/NotFound';
import grp from './components/pages/assets/grp.jpg';
import { Heart } from 'lucide-react';
import Gallery from './components/pages/Gallery';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
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

        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <Heart className="w-3 h-3 text-white" />
            </div>
          ))}
        </div>
        
        <Routes>
          {/* Main Website Route */}
          <Route path="/" element={
            <div className="relative z-20">
              <Navbar />
              <Home />
              <AboutUs />
              <Events />
              <Gallery />
              <ContactUs />
              <Footer />
              {/* Placeholder sections */}

              

              
            </div>
          } />
          
          {/* Individual page routes (if needed) */}
          <Route path="/home" element={
            <div className="relative z-20">
              <Navbar />
              <Home />
            </div>
          } />
          
          <Route path="/about" element={
            <div className="relative z-20">
              <Navbar />
              <AboutUs />
            </div>
          } />
          
          <Route path="/events" element={
            <div className="relative z-20">
              <Navbar />
              <Events />
            </div>
          } />
          
          {/* 404 Not Found Route - This should be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>

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
    </Router>
  );
}

export default App;