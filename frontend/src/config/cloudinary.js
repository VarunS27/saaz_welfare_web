import { Cloudinary } from '@cloudinary/url-gen';

// Your Cloudinary configuration using environment variables
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dxtknsglx'
  }
});

// Helper function to generate optimized image URLs
export const getCloudinaryUrl = (publicId, options = {}) => {
  // Add safety check for undefined publicId
  if (!publicId) {
    console.warn('getCloudinaryUrl: publicId is undefined or null');
    return '/abt2.png'; // Return fallback image
  }

  try {
    const image = cld.image(publicId)
      .quality(options.quality || 'auto')
      .format('auto');

    // Apply resize if provided
    if (options.resize) {
      const { width, height, crop = 'fill' } = options.resize;
      if (width && height) {
        image.resize(`c_${crop},w_${width},h_${height}`);
      } else if (width) {
        image.resize(`c_${crop},w_${width}`);
      }
    }

    return image.toURL();
  } catch (error) {
    console.error('Error generating Cloudinary URL:', error);
    return '/abt2.png'; // Return fallback on error
  }
};

// Function for direct URL construction (alternative method)
export const getDirectCloudinaryUrl = (publicId, transformations = '') => {
  if (!publicId) return '/abt2.png';
  
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dxtknsglx';
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`;
  }
  
  return `${baseUrl}/f_auto,q_auto/${publicId}`;
};

export default cld;