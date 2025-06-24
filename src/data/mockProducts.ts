
import { Product, Category } from '@/types/product';

export const mockCategories: Category[] = [
  {
    id: 'security',
    name: 'Sécurité',
    description: 'Solutions de cybersécurité et protection',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    productCount: 4
  },
  {
    id: 'productivity',
    name: 'Productivité',
    description: 'Outils de collaboration et gestion',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
    productCount: 3
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Analyse de données et reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    productCount: 2
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Outils de communication d\'entreprise',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    productCount: 3
  }
];

export const mockProducts: Product[] = [
  {
    id: 'antivirus-pro',
    name: 'SecureShield Pro',
    description: 'Protection antivirus avancée avec surveillance en temps réel',
    price: 12,
    category: 'security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500',
    features: [
      'Protection en temps réel',
      'Scan automatique programmé',
      'Firewall intégré',
      'Protection email',
      'Support 24/7'
    ],
    isSubscription: true
  },
  {
    id: 'project-manager',
    name: 'TaskFlow Manager',
    description: 'Gestion de projets et collaboration d\'équipe',
    price: 25,
    category: 'productivity',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500',
    features: [
      'Gestion de tâches',
      'Calendrier partagé',
      'Tableaux Kanban',
      'Rapports automatiques',
      'Intégrations multiples'
    ],
    isSubscription: true
  },
  {
    id: 'backup-cloud',
    name: 'CloudBackup Enterprise',
    description: 'Sauvegarde automatique et sécurisée dans le cloud',
    price: 18,
    category: 'security',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500',
    features: [
      'Sauvegarde automatique',
      'Chiffrement AES-256',
      'Stockage illimité',
      'Restauration rapide',
      'Multi-appareils'
    ],
    isSubscription: true
  },
  {
    id: 'crm-plus',
    name: 'CustomerHub CRM',
    description: 'Gestion de la relation client complète',
    price: 35,
    category: 'productivity',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    features: [
      'Base de données clients',
      'Suivi des ventes',
      'Automatisation marketing',
      'Rapports personnalisés',
      'API complète'
    ],
    isSubscription: true
  },
  {
    id: 'analytics-dashboard',
    name: 'DataInsight Analytics',
    description: 'Tableaux de bord et analyse de données avancée',
    price: 45,
    category: 'analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    features: [
      'Tableaux de bord interactifs',
      'Analyse prédictive',
      'Connecteurs de données',
      'Alertes automatiques',
      'Export multi-format'
    ],
    isSubscription: true
  },
  {
    id: 'password-manager',
    name: 'VaultKeeper Pro',
    description: 'Gestionnaire de mots de passe sécurisé',
    price: 8,
    category: 'security',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500',
    features: [
      'Coffre-fort chiffré',
      'Génération automatique',
      'Synchronisation multi-appareils',
      'Authentification 2FA',
      'Audit de sécurité'
    ],
    isSubscription: true
  },
  {
    id: 'email-marketing',
    name: 'MailCampaign Pro',
    description: 'Plateforme d\'email marketing et automation',
    price: 29,
    category: 'communication',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500',
    features: [
      'Éditeur de templates',
      'Segmentation avancée',
      'A/B Testing',
      'Automatisation workflows',
      'Analytics détaillées'
    ],
    isSubscription: true
  },
  {
    id: 'vpn-business',
    name: 'SecureVPN Business',
    description: 'VPN professionnel pour entreprises',
    price: 15,
    category: 'security',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500',
    features: [
      'Serveurs dans 50+ pays',
      'Chiffrement militaire',
      'No-logs policy',
      'Multi-connexions',
      'Support dédié'
    ],
    isSubscription: true
  },
  {
    id: 'video-conference',
    name: 'MeetPro Conference',
    description: 'Solution de visioconférence professionnelle',
    price: 22,
    category: 'communication',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500',
    features: [
      'HD Video & Audio',
      'Partage d\'écran',
      'Enregistrement cloud',
      'Jusqu\'à 500 participants',
      'Intégration calendrier'
    ],
    isSubscription: true
  },
  {
    id: 'accounting-software',
    name: 'FinanceTracker Pro',
    description: 'Logiciel de comptabilité et facturation',
    price: 40,
    category: 'productivity',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500',
    features: [
      'Facturation automatique',
      'Suivi des dépenses',
      'Rapports fiscaux',
      'Multi-devises',
      'Synchronisation bancaire'
    ],
    isSubscription: true
  },
  {
    id: 'website-monitor',
    name: 'SiteWatch Monitor',
    description: 'Surveillance et monitoring de sites web',
    price: 16,
    category: 'analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    features: [
      'Monitoring 24/7',
      'Alertes instantanées',
      'Métriques de performance',
      'Tests de disponibilité',
      'Rapports détaillés'
    ],
    isSubscription: true
  },
  {
    id: 'team-chat',
    name: 'TeamTalk Messenger',
    description: 'Messagerie d\'équipe et collaboration',
    price: 12,
    category: 'communication',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
    features: [
      'Chat en temps réel',
      'Canaux organisés',
      'Partage de fichiers',
      'Intégrations apps',
      'Historique illimité'
    ],
    isSubscription: true
  }
];
