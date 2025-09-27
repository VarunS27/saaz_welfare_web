import { getCloudinaryUrl } from '../config/cloudinary';

// Preset configurations for different image types
export const IMAGE_PRESETS = {
  hero: { resize: { width: 1920, height: 1080, crop: 'fill' }, quality: 90 },
  gallery: { resize: { width: 800, height: 600, crop: 'fill' }, quality: 80 },
  thumbnail: { resize: { width: 300, height: 200, crop: 'fill' }, quality: 70 },
  avatar: { resize: { width: 150, height: 150, crop: 'fill' }, quality: 80 },
  logo: { resize: { width: 200, height: 80, crop: 'fit' }, quality: 90 }
};

export const getOptimizedImage = (publicId, preset = 'gallery') => {
  return getCloudinaryUrl(publicId, IMAGE_PRESETS[preset]);
};