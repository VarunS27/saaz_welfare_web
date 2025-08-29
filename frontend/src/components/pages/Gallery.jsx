import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, Filter, Grid3X3, Grid2X2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [gridSize, setGridSize] = useState('medium'); // small, medium, large
  const [isLoading, setIsLoading] = useState(true);

  // Mock gallery data - replace with backend API later
  const galleryData = [
    {
      id: 1,
      src: '/gallery/health-camp1.jpg',
      title: 'Community Health Camp',
      category: 'healthcare',
      date: '2024-12-15',
      location: 'Mumbai Community Center',
      participants: 150,
      description: 'Free health checkups and medical consultations for the community members.',
      size: 'large' // large, medium, small
    },
    {
      id: 2,
      src: '/gallery/education1.jpg',
      title: 'Children Education Workshop',
      category: 'education',
      date: '2024-12-10',
      location: 'Local School',
      participants: 80,
      description: 'Interactive learning sessions focusing on basic literacy and numeracy.',
      size: 'medium'
    },
    {
      id: 3,
      src: '/gallery/food-drive1.jpg',
      title: 'Food Distribution Drive',
      category: 'community',
      date: '2024-12-08',
      location: 'City Center',
      participants: 200,
      description: 'Monthly food distribution program for families in need.',
      size: 'small'
    },
    {
      id: 4,
      src: '/gallery/elder-care1.jpg',
      title: 'Senior Citizens Care',
      category: 'eldercare',
      date: '2024-12-05',
      location: 'Old Age Home',
      participants: 60,
      description: 'Spending quality time with elderly residents and health checkups.',
      size: 'medium'
    },
    {
      id: 5,
      src: '/gallery/environment1.jpg',
      title: 'Environmental Cleanup',
      category: 'environment',
      date: '2024-12-01',
      location: 'Local Park',
      participants: 100,
      description: 'Community-driven environmental conservation initiative.',
      size: 'large'
    },
    {
      id: 6,
      src: '/gallery/skills1.jpg',
      title: 'Skills Development Training',
      category: 'skills',
      date: '2024-11-28',
      location: 'Training Center',
      participants: 40,
      description: 'Vocational training in tailoring and computer basics.',
      size: 'small'
    },
    {
      id: 7,
      src: '/gallery/sports1.jpg',
      title: 'Children Sports Day',
      category: 'sports',
      date: '2024-11-25',
      location: 'Sports Ground',
      participants: 120,
      description: 'Fun sports activities promoting physical fitness among children.',
      size: 'medium'
    },
    {
      id: 8,
      src: '/gallery/women1.jpg',
      title: 'Women Empowerment Seminar',
      category: 'empowerment',
      date: '2024-11-20',
      location: 'Community Hall',
      participants: 75,
      description: 'Educational seminar on women rights and financial literacy.',
      size: 'small'
    },
    {
      id: 9,
      src: '/gallery/medical1.jpg',
      title: 'Medical Equipment Donation',
      category: 'healthcare',
      date: '2024-11-15',
      location: 'District Hospital',
      participants: 30,
      description: 'Donation of essential medical equipment to healthcare facilities.',
      size: 'large'
    },
    {
      id: 10,
      src: '/gallery/volunteer1.jpg',
      title: 'Volunteer Training Program',
      category: 'community',
      date: '2024-11-10',
      location: 'Community Center',
      participants: 90,
      description: 'Training session for new volunteers joining our mission.',
      size: 'medium'
    },
    {
      id: 11,
      src: '/gallery/event1.jpg',
      title: 'Annual Charity Gala',
      category: 'events',
      date: '2024-11-05',
      location: 'Hotel Grand',
      participants: 250,
      description: 'Annual fundraising event with community leaders and donors.',
      size: 'large'
    },
    {
      id: 12,
      src: '/gallery/kids1.jpg',
      title: 'Children Art Workshop',
      category: 'education',
      date: '2024-11-01',
      location: 'Art Center',
      participants: 65,
      description: 'Creative art sessions to nurture children talent and creativity.',
      size: 'small'
    }
  ];

  const categories = [
    { key: 'all', label: 'All', color: 'from-slate-500 to-slate-700' },
    { key: 'healthcare', label: 'Healthcare', color: 'from-red-400 to-red-600' },
    { key: 'education', label: 'Education', color: 'from-blue-400 to-blue-600' },
    { key: 'community', label: 'Community', color: 'from-green-400 to-green-600' },
    { key: 'eldercare', label: 'Elder Care', color: 'from-purple-400 to-purple-600' },
    { key: 'environment', label: 'Environment', color: 'from-emerald-400 to-emerald-600' },
    { key: 'skills', label: 'Skills', color: 'from-orange-400 to-orange-600' },
    { key: 'sports', label: 'Sports', color: 'from-yellow-400 to-yellow-600' },
    { key: 'empowerment', label: 'Empowerment', color: 'from-pink-400 to-pink-600' },
    { key: 'events', label: 'Events', color: 'from-indigo-400 to-indigo-600' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  const getGridClass = (size, gridSize) => {
    if (gridSize === 'small') return 'col-span-1 row-span-1 aspect-square';
    if (gridSize === 'large') return 'col-span-1 row-span-1 aspect-square';
    
    // Medium grid with varied sizes
    switch (size) {
      case 'large': return 'col-span-2 row-span-2 aspect-square';
      case 'medium': return 'col-span-1 row-span-2 aspect-[1/2]';
      case 'small': return 'col-span-1 row-span-1 aspect-square';
      default: return 'col-span-1 row-span-1 aspect-square';
    }
  };

  const getGridCols = () => {
    switch (gridSize) {
      case 'small': return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
      case 'large': return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
      default: return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.key === category);
    return cat ? cat.color : 'from-gray-400 to-gray-600';
  };

  if (isLoading) {
    return (
      <section className="min-h-screen py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-[#6A0DAD]"></div>
            <p className="mt-4 text-slate-600">Loading Gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="min-h-screen py-20 px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-75"></div>
      
      {/* Decorative elements */}
     
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#6A0DAD]/10 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#6A0DAD] mr-2" />
            <span className="text-sm font-semibold text-[#6A0DAD]">Our Impact</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Gallery of <span className="text-[#6A0DAD]">Hope</span> & <span className="text-[#228B22]">Change</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#228B22] to-[#6A0DAD] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Witness the moments that define our mission - every photo tells a story of community, compassion, and positive change.
          </p>
        </div>

        {/* Controls */}
        
        {/* Gallery Grid */}
        <div className={`grid ${getGridCols()} gap-4 auto-rows-max`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white ${getGridClass(image.size, gridSize)}`}
              onClick={() => openModal(image)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23F8F8F8'/%3E%3Ccircle cx='200' cy='160' r='40' fill='%236A0DAD' opacity='0.3'/%3E%3Crect x='160' y='220' width='80' height='80' fill='%23228B22' opacity='0.3' rx='10'/%3E%3Ctext x='200' y='330' text-anchor='middle' fill='%236A0DAD' font-size='14' font-weight='bold'%3E${image.title}%3C/text%3E%3Ctext x='200' y='350' text-anchor='middle' fill='%23666' font-size='12'%3E${image.category}%3C/text%3E%3C/svg%3E`;
                }}
              />
              
              {/* Category Badge */}
              <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(image.category)} backdrop-blur-sm`}>
                {categories.find(c => c.key === image.category)?.label}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{image.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(image.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {image.participants}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Info */}
        <div className="text-center mt-12">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-[#6A0DAD]">{filteredImages.length}</span> {filteredImages.length === 1 ? 'photo' : 'photos'}
            {selectedCategory !== 'all' && (
              <span> in <span className="font-semibold text-[#228B22]">{categories.find(c => c.key === selectedCategory)?.label}</span></span>
            )}
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-slate-800 p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-slate-800 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-slate-800 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="grid lg:grid-cols-3 max-h-[90vh]">
              {/* Image */}
              <div className="lg:col-span-2 relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover max-h-[60vh] lg:max-h-[90vh]"
                />
              </div>

              {/* Details */}
              <div className="p-6 lg:p-8 overflow-y-auto max-h-[30vh] lg:max-h-[90vh]">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(selectedImage.category)} mb-4`}>
                  {categories.find(c => c.key === selectedImage.category)?.label}
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{selectedImage.title}</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4 text-[#6A0DAD]" />
                    <span>{new Date(selectedImage.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-[#228B22]" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>{selectedImage.participants} Participants</span>
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  {selectedImage.description}
                </p>
                
                <button className="w-full bg-gradient-to-r from-[#6A0DAD] to-[#228B22] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#228B22] hover:to-[#6A0DAD] transition-all duration-300 transform hover:scale-105">
                  Learn More About This Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
