import React from 'react';
// import abt from './assets/abt.jpg';
const AboutUs = () => {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-[#6A0DAD] mb-8 text-center"><u>About Us</u></h2>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Image */}
          <div className="relative">
            <div className="w-full h-full bg-[#F8F8F8] rounded-2xl shadow-xl overflow-hidden border-2 border-[#6A0DAD]/10">
              <img
                src="/logo.jpg"
                alt="About Saaz Welfare"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23F8F8F8'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='%236A0DAD' font-size='16' font-weight='bold'%3EAbout Image%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%236A0DAD' font-size='14'%3ESaaz Welfare%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          {/* QR Code and Donate Section */}
          <div className="space-y-8">
            <div className="bg-[#F8F8F8] p-8 rounded-2xl shadow-lg border border-[#6A0DAD]/10">
              <h3 className="text-2xl font-bold text-[#6A0DAD] mb-6 text-center">Quick Payment</h3>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-40 h-40 bg-white rounded-xl shadow-md flex items-center justify-center border-2 border-[#228B22]/20">
                  <img
                    src="/qr-code.png"
                    alt="QR for Payment"
                    className="w-32 h-32 object-contain"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='white' stroke='%23228B22' stroke-width='2'/%3E%3Ctext x='64' y='60' text-anchor='middle' fill='%23228B22' font-size='12'%3EQR for%3C/text%3E%3Ctext x='64' y='76' text-anchor='middle' fill='%23228B22' font-size='12'%3EPayment%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <button 
                  onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#228B22] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1e7a1e] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Who are We Card */}
          <div className="bg-[#F8F8F8] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#6A0DAD]/10">
            <div className="bg-[#6A0DAD] text-white px-4 py-2 rounded-lg text-center font-semibold mb-6">
              Who are We
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Saaz Welfare is a dedicated organization committed to serving communities through 
              comprehensive welfare programs. We are a team of passionate individuals who believe 
              in creating positive change through collective action. Our organization focuses on 
              bridging social gaps and providing essential support to those who need it most. 
              We work tirelessly to ensure that every individual has access to basic necessities 
              and opportunities for growth and development.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="bg-[#F8F8F8] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#228B22]/10">
            <div className="bg-[#228B22] text-white px-4 py-2 rounded-lg text-center font-semibold mb-6">
              Our Mission
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Our mission is to empower communities through education, healthcare, and social 
              development initiatives. We strive to create sustainable solutions that address 
              the root causes of social issues. We believe in fostering self-reliance and 
              building capacity within communities. Our approach is holistic, addressing not 
              just immediate needs but also long-term development goals. We aim to create 
              lasting impact through collaborative efforts and innovative programs.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="bg-[#F8F8F8] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#6A0DAD]/10">
            <div className="bg-[#6A0DAD] text-white px-4 py-2 rounded-lg text-center font-semibold mb-6">
              Our Vision
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              We envision a world where every individual has equal opportunities to thrive and 
              succeed. Our vision is to build resilient communities that can sustain themselves 
              and support their members effectively. We see a future where social inequalities 
              are minimized, and everyone has access to quality education, healthcare, and 
              social services. We aim to be a catalyst for positive change, inspiring others 
              to join our mission of creating a more equitable society.
            </p>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-[#6A0DAD] mb-6">
            Making a Difference Together
          </h2>
          <div className="w-24 h-1 bg-[#228B22] rounded-full mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            At Saaz Welfare, we believe that collective action can create extraordinary change. 
            Join us in our mission to build stronger, more resilient communities where everyone 
            has the opportunity to succeed and thrive.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#6A0DAD] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5a0b96] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Involved
            </button>
            <button 
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#228B22] text-[#228B22] px-8 py-3 rounded-xl font-semibold hover:bg-[#228B22] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
