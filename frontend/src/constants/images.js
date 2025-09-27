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

  },
  
  // About section images
  about: {
    fn: 'fn_phfgwu',
    fn2: 'fn2_fw6whg',
    grp: 'grp_zlhdei',
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
  },
  
  // Events images
  events: {},
  
  // QR Code for donations
  qrCode: null
};

// Fallback images for development
export const FALLBACK_IMAGES = {
  logo: '/abt2.png',
  fn: './components/pages/assets/fn.jpg',
  fn2: './components/pages/assets/fn2.jpg',
  grp: './components/pages/assets/grp.jpg',
  maaSaraswati: 'https://via.placeholder.com/300x400?text=Maa+Saraswati',
  teamMember: 'https://via.placeholder.com/300x400?text=Team+Member',
  defaultImage: 'https://via.placeholder.com/600x400?text=Image+Coming+Soon'
};

// Direct URLs for immediate testing
export const DIRECT_URLS = {
  logo: getDirectCloudinaryUrl('abt2_ebwr0f', 'w_200,h_80,c_fit'),
  
  // Carousel images for Home component
  carouselFn: getDirectCloudinaryUrl('fn_phfgwu', 'w_800,h_500,c_fill,q_auto,f_auto'),
  carouselFn2: getDirectCloudinaryUrl('fn2_fw6whg', 'w_800,h_500,c_fill,q_auto,f_auto'),
  
  // Background image for App
  backgroundGrp: getDirectCloudinaryUrl('grp_zlhdei', 'w_1920,h_1080,c_fill,q_auto,f_auto'),
  
  // Sacred image
  maaSaraswati: getDirectCloudinaryUrl('image-Picsart-AiImageEnhancer-removebg-preview_kzfbt0', 'w_300,h_400,c_fill,q_auto,f_auto'),
  
  // Team member images
  teamMember1: getDirectCloudinaryUrl('3_2b743158_z757cz', 'w_400,h_500,c_fill,q_auto,f_auto'),
  teamMember2: getDirectCloudinaryUrl('a009a322_ooyvws', 'w_400,h_500,c_fill,q_auto,f_auto'),
  teamMember3: getDirectCloudinaryUrl('7511ed1c_uygzuc', 'w_400,h_500,c_fill,q_auto,f_auto'),
  teamMember4: getDirectCloudinaryUrl('bdc26a27_t0wpqk', 'w_400,h_500,c_fill,q_auto,f_auto'),
  teamMember5: getDirectCloudinaryUrl('e6019589_pgtjvr', 'w_400,h_500,c_fill,q_auto,f_auto'),


};