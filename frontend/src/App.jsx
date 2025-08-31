import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Main Website Components
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Events from './components/pages/Events';
import Gallery from './components/pages/Gallery';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/pages/Footer';
import NotFound from './components/NotFound';

// Auth Components
import { AuthProvider } from './components/context/AuthContext';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';

// Assets
import grp from './components/pages/assets/grp.jpg';
import { Heart } from 'lucide-react';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />

          {/* Main Website Route */}
          <Route path="/" element={
            <div className="min-h-screen relative overflow-hidden"
                 style={{
                   backgroundImage: `url(${grp})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                   backgroundAttachment: 'fixed'
                 }}>
              
              {/* Background Overlay */}
              <div className="absolute inset-0 z-0"
                   style={{
                     background: `
                       radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.4) 0%, transparent 50%),
                       radial-gradient(ellipse at top right, rgba(249, 147, 30, 0.4) 0%, transparent 50%),
                       radial-gradient(ellipse at bottom left, rgba(6, 255, 165, 0.4) 0%, transparent 50%),
                       radial-gradient(ellipse at bottom right, rgba(93, 76, 219, 0.4) 0%, transparent 50%),
                       linear-gradient(135deg, rgba(106, 13, 173, 0.1) 0%, rgba(34, 139, 34, 0.1) 100%)
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
              
              <div className="relative z-20">
                <Navbar />
                <Home />
                <AboutUs />
                <Events />
                <Gallery />
                <ContactUs />
                <Footer />
              </div>
            </div>
          } />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

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