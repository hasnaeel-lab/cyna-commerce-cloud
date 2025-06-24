
import { Product, Category } from '@/types/product';

export const mockCategories: Category[] = [
  {
    id: 'clothing',
    name: 'Vêtements',
    description: 'Mode et accessoires pour tous',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    productCount: 4
  },
  {
    id: 'electronics',
    name: 'Électronique',
    description: 'Smartphones, tablettes et gadgets',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400',
    productCount: 3
  },
  {
    id: 'accessories',
    name: 'Accessoires',
    description: 'Montres, bijoux et accessoires',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    productCount: 2
  },
  {
    id: 'home',
    name: 'Maison',
    description: 'Décoration et mobilier',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    productCount: 3
  }
];

export const mockProducts: Product[] = [
  {
    id: 'tshirt-1',
    name: 'T-shirt Premium Coton',
    description: 'T-shirt en coton bio, doux et confortable pour un usage quotidien',
    price: 25,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    features: [
      'Coton bio 100%',
      'Coupe moderne',
      'Résistant au lavage',
      'Plusieurs couleurs',
      'Tailles S à XXL'
    ],
    isSubscription: false
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15 Pro',
    description: 'Le dernier smartphone Apple avec puce A17 Pro et appareil photo avancé',
    price: 1200,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
    features: [
      'Écran Super Retina XDR 6.1"',
      'Puce A17 Pro',
      'Triple appareil photo 48MP',
      '128GB de stockage',
      'Face ID sécurisé'
    ],
    isSubscription: false
  },
  {
    id: 'sneakers-1',
    name: 'Baskets Sport Classic',
    description: 'Baskets confortables pour le sport et le quotidien',
    price: 85,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    features: [
      'Semelle amortissante',
      'Matériaux respirants',
      'Design moderne',
      'Multiples coloris',
      'Pointures 36 à 46'
    ],
    isSubscription: false
  },
  {
    id: 'samsung-s24',
    name: 'Samsung Galaxy S24',
    description: 'Smartphone Android haut de gamme avec IA intégrée',
    price: 900,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
    features: [
      'Écran Dynamic AMOLED 6.2"',
      'Processeur Snapdragon 8 Gen 3',
      'Triple caméra 50MP',
      '256GB de stockage',
      'Batterie 4000mAh'
    ],
    isSubscription: false
  },
  {
    id: 'watch-1',
    name: 'Montre Connectée Elite',
    description: 'Montre intelligente avec suivi santé et notifications',
    price: 250,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    features: [
      'Écran tactile OLED',
      'Suivi de la fréquence cardiaque',
      'GPS intégré',
      'Étanche 50m',
      'Autonomie 7 jours'
    ],
    isSubscription: false
  },
  {
    id: 'jeans-1',
    name: 'Jean Slim Fit',
    description: 'Jean moderne coupe ajustée en denim de qualité',
    price: 65,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    features: [
      'Denim stretch confortable',
      'Coupe slim moderne',
      'Finitions soignées',
      'Lavage stone washed',
      'Tailles 28 à 42'
    ],
    isSubscription: false
  },
  {
    id: 'laptop-1',
    name: 'MacBook Air M2',
    description: 'Ordinateur portable ultra-fin avec puce Apple M2',
    price: 1400,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    features: [
      'Puce Apple M2',
      'Écran Liquid Retina 13.6"',
      '8GB RAM unifiée',
      '256GB SSD',
      'Autonomie 18h'
    ],
    isSubscription: false
  },
  {
    id: 'headphones-1',
    name: 'Casque Audio Bluetooth',
    description: 'Casque sans fil avec réduction de bruit active',
    price: 180,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    features: [
      'Réduction de bruit active',
      'Bluetooth 5.0',
      'Autonomie 30h',
      'Charge rapide',
      'Commandes tactiles'
    ],
    isSubscription: false
  },
  {
    id: 'lamp-1',
    name: 'Lampe de Bureau LED',
    description: 'Lampe moderne avec éclairage LED ajustable',
    price: 45,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    features: [
      'LED économique',
      'Luminosité réglable',
      'Bras articulé',
      'Port USB intégré',
      'Design moderne'
    ],
    isSubscription: false
  },
  {
    id: 'chair-1',
    name: 'Chaise de Bureau Ergonomique',
    description: 'Chaise confortable pour bureau avec support lombaire',
    price: 320,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
    features: [
      'Support lombaire ajustable',
      'Accoudoirs réglables',
      'Roulettes silencieuses',
      'Mesh respirant',
      'Garantie 5 ans'
    ],
    isSubscription: false
  },
  {
    id: 'dress-1',
    name: 'Robe Élégante',
    description: 'Robe chic pour occasions spéciales',
    price: 95,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
    features: [
      'Tissu fluide de qualité',
      'Coupe flatteuse',
      'Plusieurs couleurs',
      'Tailles XS à XL',
      'Facile d\'entretien'
    ],
    isSubscription: false
  },
  {
    id: 'plant-1',
    name: 'Plante Décorative',
    description: 'Belle plante verte pour décorer votre intérieur',
    price: 35,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500',
    features: [
      'Plante facile d\'entretien',
      'Purifie l\'air',
      'Pot décoratif inclus',
      'Hauteur 40-50cm',
      'Guide d\'entretien fourni'
    ],
    isSubscription: false
  }
];
