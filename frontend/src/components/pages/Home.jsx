import React, { useState, useEffect } from 'react';
import care1 from './assets/care1.png';
import care2 from './assets/care2.png';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      src: care1,
      alt: "Welfare Activity 1"
    },
    {
      src: care2,
      alt: "Welfare Activity 2"
    },

  ];

  const companyIntro = `
    Saaz Welfare is dedicated to creating positive change in communities through 
    comprehensive welfare programs. We focus on education, healthcare, and social 
    development initiatives that empower individuals and families. Our mission is 
    to bridge gaps in society by providing essential services and support to those 
    in need. Through collaborative efforts with local communities, we strive to 
    build a more equitable and sustainable future for all. Join us in making a 
    difference, one life at a time.
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Home Section */}
      <section id="home" className="min-h-screen bg-white pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Carousel Section */}
            <div className="relative">
              <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl bg-[#F8F8F8]">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6A0DAD] bg-opacity-80 text-white p-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6A0DAD] bg-opacity-80 text-white p-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-[#6A0DAD] scale-125'
                        : 'bg-gray-300 hover:bg-[#6A0DAD] hover:bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Company Intro Section */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-[#6A0DAD] mb-4 leading-tight">
                  Welcome to <br />
                  <span className="text-[#228B22]">Saaz Welfare</span>
                </h1>
                <div className="w-24 h-1 bg-[#228B22] rounded-full"></div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                {companyIntro}
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#6A0DAD] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5a0b96] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Learn More
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-[#228B22] text-[#228B22] px-8 py-3 rounded-xl font-semibold hover:bg-[#228B22] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-[#F8F8F8] py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">About Us</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            We are committed to making a difference in the lives of those who need it most...
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Our Events</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            Join us in our upcoming welfare events and activities...
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen bg-[#F8F8F8] py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Gallery</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            See our work in action through these memorable moments...
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8">Contact Us</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            Get in touch with us to learn more about our mission...
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="min-h-screen bg-[#F8F8F8] py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#228B22] mb-8">Support Our Cause</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            Your donation helps us continue our welfare activities...
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;