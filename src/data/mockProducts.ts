
import { Product, Category } from '@/types/product';

export const mockCategories: Category[] = [
  {
    id: 'crm',
    name: 'CRM & Ventes',
    description: 'Solutions de gestion de la relation client',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
    productCount: 3
  },
  {
    id: 'productivity',
    name: 'Productivité',
    description: 'Outils de collaboration et de gestion de projets',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
    productCount: 4
  },
  {
    id: 'analytics',
    name: 'Analytics & BI',
    description: 'Solutions d\'analyse et business intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    productCount: 2
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Outils de communication et support client',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400',
    productCount: 3
  }
];

export const mockProducts: Product[] = [
  {
    id: 'crm-pro',
    name: 'CRM Pro',
    description: 'Solution CRM complète pour optimiser vos ventes et fidéliser vos clients',
    price: 29,
    category: 'crm',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    features: [
      'Gestion des contacts avancée',
      'Suivi des opportunités',
      'Automatisation des emails',
      'Rapports de vente détaillés',
      'Intégration calendrier'
    ],
    isSubscription: true,
    subscriptionType: 'monthly'
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    description: 'Gérez vos projets avec efficacité et collaboration',
    price: 19,
    category: 'productivity',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
    features: [
      'Gestion de tâches avancée',
      'Collaboration en temps réel',
      'Suivi du temps',
      'Diagrammes de Gantt',
      'Notifications intelligentes'
    ],
    isSubscription: true,
    subscriptionType: 'monthly'
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: 'Tableaux de bord interactifs pour analyser vos performances',
    price: 49,
    category: 'analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    features: [
      'Visualisations interactives',
      'KPI en temps réel',
      'Rapports automatisés',
      'Prédictions IA',
      'Export multi-format'
    ],
    isSubscription: true,
    subscriptionType: 'monthly'
  },
  {
    id: 'team-chat',
    name: 'Team Chat',
    description: 'Communication d\'équipe sécurisée et productive',
    price: 9,
    category: 'communication',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500',
    features: [
      'Chat en temps réel',
      'Partage de fichiers',
      'Appels vidéo intégrés',
      'Canaux thématiques',
      'Historique searchable'
    ],
    isSubscription: true,
    subscriptionType: 'monthly'
  },
  {
    id: 'invoice-manager',
    name: 'Invoice Manager',
    description: 'Gestion simplifiée de vos factures et devis',
    price: 15,
    category: 'productivity',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500',
    features: [
      'Création de factures automatisée',
      'Suivi des paiements',
      'Relances automatiques',
      'Templates personnalisables',
      'Intégration comptable'
    ],
    isSubscription: true,
    subscriptionType: 'monthly'
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    description: 'Plateforme de support client omnicanal',
    price: 39,
    category: 'communication',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500',
    features: [
      'Tickets de support',
      'Chat en direct',
      'Base de connaissances',
      'Satisfaction client',
      'Analytics support'
    ],
    isSubscription: true,
    subscriptionType: 'monthly'
  }
];
