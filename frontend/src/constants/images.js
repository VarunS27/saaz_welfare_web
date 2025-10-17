import { getDirectCloudinaryUrl } from '../config/cloudinary';

// Your actual Cloudinary public IDs
export const IMAGES = {
  // Logo and branding
  logo: 'abt2_ebwr0f',
  
  // Gallery images (add more as you upload them)
  gallery: {
    image1: 'fn_phfgwu',
    image2: 'fn2_fw6whg',
    image3: 'grp_zlhdei',
    image4: 'gro4_xxtzsb',
    image5: 'gro8_whuvc3',
    image6: 'gro7_i2jkbx',
    image7: 'gro5_vp9hc0',
    image8: 'gro6_c0auzs',
    image9: 'gro1_myqyq2',
    image10: 'gro9_i69frg',
    image11: '7_f763d729_qeqalg',
    image12: '25_8a6bc7d4_joztzd',
  },
  
  // About section images
  about: {
    fn: 'fn_phfgwu',
    fn2: 'fn2_fw6whg',
    grp: 'grp_zlhdei',
    fn3: '7_f763d729_qeqalg',
    fn4: '25_8a6bc7d4_joztzd',
    fn5: 'event_n3_x9mgb9'
    
  },
  
  // Sacred/Religious images
  sacred: {
    maaSaraswati: 'image-Picsart-AiImageEnhancer-removebg-preview_kzfbt0',
  },
  
  // Team member images
  team: {
    member1: '3_2b743158_z757cz',
    member2: 'a009a322_ooyvws',
    member3: '7511ed1c_uygzuc',
    member4: 'bdc26a27_t0wpqk',
    member5: 'e6019589_pgtjvr',
    member6: '0f561e_velth9',
    member7: '0b63d_rorpum',
    member8: '8017_jqvr8m',
  },
  
  // Events images
  event1: {
    event1: 'grp_zlhdei',
    event2: 'gro1_myqyq2', 
  },
  event2: {
    event1: 'event_n1_nsqq8s',  // Fixed: removed trailing spaces
    event2: 'event_n2_i2iano',
    event3: 'event_n3_x9mgb9',
  },
  event3: {
    event1: 'event_4_ev8qtd',
    event2: 'event_5_uwv3bq',
    event3: 'event_3_mabfwz',    
    event4: 'event_6_pftauv',    
  },

  // QR Code for donations
  qrCode: 'qr_vc1phs',

  // Guru strip
  guruStrip: {
    str: '3b38c926_heu0yw'
  }
};

// Fallback images for development
export const FALLBACK_IMAGES = {
  logo: '/abt2.png',
  fn: './components/pages/assets/fn.jpg',
  fn2: './components/pages/assets/fn2.jpg',
  grp: './components/pages/assets/grp.jpg',
  maaSaraswati: 'https://via.placeholder.com/300x400/FF6B35/FFFFFF?text=Maa+Saraswati',
  teamMember: 'https://via.placeholder.com/300x400/4A90E2/FFFFFF?text=Team+Member',
  defaultImage: 'https://via.placeholder.com/600x400/c98d32/FFFFFF?text=Image+Coming+Soon',
  qrCode: '/qr.jpg',
  // Event fallbacks
  eventImage: 'https://via.placeholder.com/600x400/39FF14/FFFFFF?text=Event+Image'
};

// Direct URLs for immediate testing
export const DIRECT_URLS = {
  logo: getDirectCloudinaryUrl('abt2_ebwr0f', 'w_200,h_80,c_fit,q_auto,f_auto'),
  
  // Carousel images for Home component
  carouselFn: getDirectCloudinaryUrl('fn_phfgwu', 'w_800,h_500,c_fill,q_auto,f_auto'),
  carouselFn2: getDirectCloudinaryUrl('fn2_fw6whg', 'w_800,h_500,c_fill,q_auto,f_auto'),
  
  // Background image for App
  backgroundGrp: getDirectCloudinaryUrl('grp_zlhdei', 'w_1920,h_1080,c_fill,q_auto,f_auto'),
  
  // Sacred image
  maaSaraswati: getDirectCloudinaryUrl('image-Picsart-AiImageEnhancer-removebg-preview_kzfbt0', 'w_300,h_400,c_fill,q_auto,f_auto'),
  
  // Team member images with proper transformations
  teamMember1: getDirectCloudinaryUrl('3_2b743158_z757cz', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),
  teamMember2: getDirectCloudinaryUrl('a009a322_ooyvws', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),
  teamMember3: getDirectCloudinaryUrl('7511ed1c_uygzuc', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),
  teamMember4: getDirectCloudinaryUrl('bdc26a27_t0wpqk', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),
  teamMember5: getDirectCloudinaryUrl('e6019589_pgtjvr', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),
  teamMember6: getDirectCloudinaryUrl('0f561e_velth9', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),
  teamMember7: getDirectCloudinaryUrl('0b63d_rorpum', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),
  teamMember8: getDirectCloudinaryUrl('8017_jqvr8m', 'w_400,h_500,c_fill,q_auto,f_auto,g_face'),

  // QR Code with proper sizing
  qrCode: getDirectCloudinaryUrl('qr_vc1phs', 'w_600,h_600,c_fill,q_auto,f_auto'),

  // Event images with proper transformations
  event1_1: getDirectCloudinaryUrl('grp_zlhdei', 'w_700,h_500,c_fill,q_auto,f_auto'),
  event1_2: getDirectCloudinaryUrl('gro1_myqyq2', 'w_700,h_500,c_fill,q_auto,f_auto'),
  
  event2_1: getDirectCloudinaryUrl('event_n1_nsqq8s', 'w_700,h_500,c_fill,q_auto,f_auto'),
  event2_2: getDirectCloudinaryUrl('event_n2_i2iano', 'w_700,h_500,c_fill,q_auto,f_auto'),
  event2_3: getDirectCloudinaryUrl('event_n3_x9mgb9', 'w_700,h_500,c_fill,q_auto,f_auto'),
  
  event3_1: getDirectCloudinaryUrl('event_4_ev8qtd', 'w_700,h_500,c_fill,q_auto,f_auto'),
  event3_2: getDirectCloudinaryUrl('event_5_uwv3bq', 'w_700,h_500,c_fill,q_auto,f_auto'),
  event3_3: getDirectCloudinaryUrl('event_3_mabfwz', 'w_700,h_500,c_fill,q_auto,f_auto'),
  event3_4: getDirectCloudinaryUrl('event_6_pftauv', 'w_700,h_500,c_fill,q_auto,f_auto'),

  // Guru strip
  guruStrip: getDirectCloudinaryUrl('3b38c926_heu0yw', 'w_1200,h_300,c_fill,q_auto,f_auto')
};

// Helper function to get optimized image URLs
export const getOptimizedImageUrl = (publicId, options = {}) => {
  const defaultOptions = {
    quality: 'auto',
    format: 'auto',
    crop: 'fill',
    gravity: 'auto'
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  const transformationString = Object.entries(mergedOptions)
    .map(([key, value]) => `${key.charAt(0)}_${value}`)
    .join(',');
    
  return getDirectCloudinaryUrl(publicId, transformationString);
};

// Responsive image sets for different screen sizes
export const RESPONSIVE_IMAGES = {
  hero: {
    mobile: getDirectCloudinaryUrl('fn_phfgwu', 'w_400,h_300,c_fill,q_auto,f_auto'),
    tablet: getDirectCloudinaryUrl('fn_phfgwu', 'w_800,h_500,c_fill,q_auto,f_auto'),
    desktop: getDirectCloudinaryUrl('fn_phfgwu', 'w_1200,h_600,c_fill,q_auto,f_auto')
  },
  gallery: {
    thumbnail: 'w_300,h_200,c_fill,q_auto,f_auto',
    medium: 'w_600,h_400,c_fill,q_auto,f_auto',
    large: 'w_1200,h_800,c_fill,q_auto,f_auto'
  }
};