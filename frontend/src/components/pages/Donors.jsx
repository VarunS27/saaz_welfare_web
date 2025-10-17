import React, { useState, useEffect } from 'react';
import { Heart, Crown, Star, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const DonorsWall = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const donors2024 = [
    "Mr. Gokaran Mahtre", "Mr. Gopal Patil", "Mr. Dinesh Tare", "Mr. Pankaj Tare",
    "Mr. Aniket Jain", "J B Joshi School", "Pawan Putra Medical", "Dulhan Jewelers",
    "Holash Parekh", "Pradeep Nair", "Akhil Gupta", "Dattatre Gokre",
    "Pawan Putra Prints", "Mr. Arun Pathak", "Jain Hospital", "Other small Donor"
  ];

  const donors2025 = [
    "Mr. Pandey Sanju", "Mr. Chitra Ramesh Wagmare", "Mr. Vaibhav Bhoir", 
    "Mr. Devendra Shenle", "Mr. Santhosh Nirkute", "Mr. Nanda Amit Patil",
    "Mr. S V Amrutkar", "Dr. Kuldeep Singh", "Mr. Rajesh Desale", "Mr. Sharad Jadhav",
    "Mr. Vinayak Patil", "Mr. Vshrani Grejja", "Mr. N A Patil", "Mr. Anagha Bhoir",
    "Mr. Suryavanshi Dhananjay", "Mr. M S Papelkar", "Mr. Snehal Papelkar",
    "Mr. Shilpa Gupta", "Mr. Sen Nilam Shivmurti", "Mr. Archana Tazne",
    "Mr. Tahseen N", "Mr. Zarmeen P", "Mr. Atul Wagh", "Mr. Bhatu Borse",
    "Mr. Y D Ahire", "Dr. Dilip Phule", "Mr. Kavita Kashkanti", "Mr. Shivan Bhanushali"
  ];

  // Create chunks of donors for carousel
  const chunkSize = 12;
  const slides2024 = [];
  const slides2025 = [];
  
  for (let i = 0; i < donors2024.length; i += chunkSize) {
    slides2024.push(donors2024.slice(i, i + chunkSize));
  }
  
  for (let i = 0; i < donors2025.length; i += chunkSize) {
    slides2025.push(donors2025.slice(i, i + chunkSize));
  }

  const allSlides = [
    ...slides2024.map(slide => ({ year: '2024-25', donors: slide, color: 'blue' })),
    ...slides2025.map(slide => ({ year: '2025-26', donors: slide, color: 'orange' }))
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % allSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, allSlides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % allSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? allSlides.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Fixed Background - Same as Gallery */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 opacity-70">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#c98d32] opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-6xl font-bold bg-gradient-to-r text-[#c6651a] mb-3">
         Our Generous Donors
          </h2>
          
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 relative overflow-hidden">
            
            {/* Current Slide Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  allSlides[currentSlide]?.color === 'blue' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-orange-500 to-red-500'
                }`}>
                  {allSlides[currentSlide]?.color === 'blue' ? (
                    <Crown className="w-5 h-5 text-white" />
                  ) : (
                    <Award className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {allSlides[currentSlide]?.year}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {allSlides[currentSlide]?.color === 'blue' ? 'Foundation Builders' : 'Hope Champions'}
                  </p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                <span className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium text-slate-600">
                  {currentSlide + 1} / {allSlides.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Donors Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {allSlides[currentSlide]?.donors.map((donor, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    allSlides[currentSlide]?.color === 'blue'
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:border-blue-300'
                      : 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Heart className={`w-4 h-4 flex-shrink-0 ${
                      allSlides[currentSlide]?.color === 'blue' ? 'text-blue-500' : 'text-orange-500'
                    }`} />
                    <span className="font-medium text-slate-700 text-sm truncate" title={donor}>
                      {donor}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {allSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#c6651a] w-6' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Compact Stats */}
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div className="text-center p-4 bg-white/80 rounded-xl shadow-md">
              <Heart className="w-40 h-6 mx-auto mb-2 text-[#a655ad]" />
              <h4 className="text-2xl font-bold text-slate-800">2</h4>
              <p className="text-sm text-slate-600">Years</p>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-xl shadow-md">
              <Award className="w-40 h-6 mx-auto mb-2 text-[#c6651a]" />
              <h4 className="text-2xl font-bold text-slate-800">100%</h4>
              <p className="text-sm text-slate-600">Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorsWall;