import React from 'react';
import './index.css'
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
// Import other components as you create them
// import Events from './components/pages/Events';
// import Gallery from './components/pages/Gallery';
// import Contact from './components/pages/Contact';
// import Donate from './components/pages/Donate';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Each component as a separate section */}
      <Home />
      <AboutUs />
      
      {/* Placeholder sections until you create the components */}
      <section id="events" className="min-h-screen bg-[#F8F8F8] py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Our Events</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            Join us in our upcoming welfare events and activities...
          </p>
        </div>
      </section>

      <section id="gallery" className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Gallery</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            See our work in action through these memorable moments...
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#F8F8F8] py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Contact Us</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            Get in touch with us to learn more about our mission...
          </p>
        </div>
      </section>

      <section id="donate" className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#228B22] mb-8">Support Our Cause</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            Your donation helps us continue our welfare activities...
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
