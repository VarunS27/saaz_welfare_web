import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, Filter, Grid, List } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [isLoading, setIsLoading] = useState(true);

  // NGO Gallery Data
  const galleryData = [
    {
      id: 1,
      src: '/gallery/health-camp1.jpg',
      title: 'Free Health Checkup Camp',
      category: 'healthcare',
      date: '2024-12-15',
      location: 'Mumbai Community Center',
      participants: 150,
      description: 'Organized a comprehensive health camp providing free medical consultations, basic health screenings, and medicine distribution for underprivileged community members.',
    },
    {
      id: 2,
      src: '/gallery/education1.jpg',
      title: 'Children Education Program',
      category: 'education',
      date: '2024-12-10',
      location: 'Government Primary School',
      participants: 80,
      description: 'Interactive learning sessions focusing on basic literacy, numeracy, and computer skills for children from low-income families.',
    },
    {
      id: 3,
      src: '/gallery/food-drive1.jpg',
      title: 'Monthly Food Distribution',
      category: 'community',
      date: '2024-12-08',
      location: 'Community Center',
      participants: 200,
      description: 'Regular food distribution program providing nutritious meals and grocery packages to families facing food insecurity.',
    },
    {
      id: 4,
      src: '/gallery/elder-care1.jpg',
      title: 'Senior Citizens Support',
      category: 'eldercare',
      date: '2024-12-05',
      location: 'Senior Care Home',
      participants: 60,
      description: 'Weekly visits providing companionship, health checkups, and recreational activities for elderly residents.',
    },
    {
      id: 5,
      src: '/gallery/environment1.jpg',
      title: 'Community Clean Drive',
      category: 'environment',
      date: '2024-12-01',
      location: 'Local Park & Beach',
      participants: 100,
      description: 'Environmental conservation initiative involving community members in cleaning public spaces and planting trees.',
    },
    {
      id: 6,
      src: '/gallery/skills1.jpg',
      title: 'Vocational Training Program',
      category: 'skills',
      date: '2024-11-28',
      location: 'Training Center',
      participants: 40,
      description: 'Skills development workshops in tailoring, computer basics, and entrepreneurship for unemployed youth.',
    },
    {
      id: 7,
      src: '/gallery/women1.jpg',
      title: 'Women Empowerment Workshop',
      category: 'empowerment',
      date: '2024-11-20',
      location: 'Community Hall',
      participants: 75,
      description: 'Educational workshop on women rights, financial literacy, and self-defense training.',
    },
    {
      id: 8,
      src: '/gallery/medical1.jpg',
      title: 'Medical Equipment Donation',
      category: 'healthcare',
      date: '2024-11-15',
      location: 'District Hospital',
      participants: 30,
      description: 'Donated essential medical equipment including wheelchairs, oxygen concentrators, and diagnostic tools.',
    }
  ];

  const categories = [
    { key: 'all', label: 'All Programs', icon: '🌟' },
    { key: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { key: 'education', label: 'Education', icon: '📚' },
    { key: 'community', label: 'Community Service', icon: '🤝' },
    { key: 'eldercare', label: 'Elder Care', icon: '👵' },
    { key: 'environment', label: 'Environment', icon: '🌱' },
    { key: 'skills', label: 'Skills Training', icon: '🎯' },
    { key: 'empowerment', label: 'Empowerment', icon: '💪' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

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

  if (isLoading) {
    return (
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading our impact stories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stories of <span className="text-blue-600">Hope & Change</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every photograph captures a moment of positive impact in our community. See how together we're making a difference.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm w-30">
          


          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(image)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='%236b7280' font-size='16' font-weight='500'%3E${image.title}%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%239ca3af' font-size='14'%3E${categories.find(c => c.key === image.category)?.icon} ${categories.find(c => c.key === image.category)?.label}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                      {categories.find(c => c.key === image.category)?.icon} {categories.find(c => c.key === image.category)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{image.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(image.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {image.participants}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-64 h-48 md:h-auto">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f3f4f6'/%3E%3Ctext x='150' y='90' text-anchor='middle' fill='%236b7280' font-size='14' font-weight='500'%3E${image.title}%3C/text%3E%3Ctext x='150' y='120' text-anchor='middle' fill='%239ca3af' font-size='12'%3E${categories.find(c => c.key === image.category)?.icon} ${categories.find(c => c.key === image.category)?.label}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                        {categories.find(c => c.key === image.category)?.icon} {categories.find(c => c.key === image.category)?.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>
                    <p className="text-gray-600 mb-4">{image.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(image.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {image.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {image.participants} participants
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredImages.length}</span> {filteredImages.length === 1 ? 'story' : 'stories'}
            {selectedCategory !== 'all' && (
              <span> from <span className="font-semibold text-gray-800">{categories.find(c => c.key === selectedCategory)?.label}</span></span>
            )}
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="grid lg:grid-cols-5 max-h-[90vh]">
              {/* Image */}
              <div className="lg:col-span-3 relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover max-h-[50vh] lg:max-h-[90vh]"
                />
              </div>

              {/* Details */}
              <div className="lg:col-span-2 p-6 overflow-y-auto max-h-[40vh] lg:max-h-[90vh]">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {categories.find(c => c.key === selectedImage.category)?.icon} {categories.find(c => c.key === selectedImage.category)?.label}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedImage.title}</h2>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{new Date(selectedImage.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>{selectedImage.participants} people impacted</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedImage.description}
                </p>
                
                <button 
                  onClick={closeModal}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Close
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