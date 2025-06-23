
// Configuration des variables d'environnement pour CYNA
export const ENV_CONFIG = {
  // URL de l'API backend
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  
  // Configuration de la base de données
  DB_NAME: 'cyna_saas_db',
  
  // URLs de redirection
  STRIPE_SUCCESS_URL: import.meta.env.VITE_STRIPE_SUCCESS_URL || '/payment-success',
  STRIPE_CANCEL_URL: import.meta.env.VITE_STRIPE_CANCEL_URL || '/payment-cancel',
  
  // Configuration de l'authentification
  TOKEN_STORAGE_KEY: 'auth_token',
  USER_STORAGE_KEY: 'user_data',
  
  // Configuration de la recherche
  SEARCH_DEBOUNCE_MS: 300,
  MAX_SEARCH_SUGGESTIONS: 8,
  
  // Configuration du panier
  CART_STORAGE_KEY: 'cart_data',
  
  // Mode de développement
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,
  
  // Endpoints de l'API
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      PROFILE: '/auth/profile',
      VERIFY: '/auth/verify',
    },
    PRODUCTS: {
      LIST: '/products',
      SEARCH: '/products/search',
      SEARCH_BY_LETTER: '/products/search/letter',
      BY_ID: '/products',
      BY_CATEGORY: '/categories',
      POPULAR: '/products/popular',
      RECOMMENDED: '/products/recommended',
    },
    ORDERS: {
      CREATE: '/orders',
      LIST: '/orders/user',
      BY_ID: '/orders',
      UPDATE_STATUS: '/orders',
      CANCEL: '/orders',
    },
    CART: {
      GET: '/cart',
      ADD: '/cart/add',
      UPDATE: '/cart/items',
      REMOVE: '/cart/items',
      CLEAR: '/cart/clear',
      COUNT: '/cart/count',
    },
    PAYMENTS: {
      CREATE: '/payments',
      VERIFY: '/payments/verify',
    }
  }
} as const;

// Types pour la configuration
export type ApiEndpoints = typeof ENV_CONFIG.ENDPOINTS;
export type EndpointKeys = keyof ApiEndpoints;

// Helper pour construire les URLs d'API
export const buildApiUrl = (endpoint: string): string => {
  return `${ENV_CONFIG.API_URL}${endpoint}`;
};

// Helper pour vérifier l'environnement
export const isDevelopment = (): boolean => ENV_CONFIG.IS_DEVELOPMENT;
export const isProduction = (): boolean => ENV_CONFIG.IS_PRODUCTION;

export default ENV_CONFIG;
