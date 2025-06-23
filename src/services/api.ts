
import httpClient from '@/utils/httpClient';
import { authService } from './authService';
import { productService } from './productService';
import { orderService } from './orderService';
import { cartService } from './cartService';

// Service API centralisé qui utilise les sous-services
class ApiService {
  // Services d'authentification
  auth = authService;
  
  // Services produits
  products = productService;
  
  // Services commandes
  orders = orderService;
  
  // Services panier
  cart = cartService;

  // Méthodes génériques HTTP (héritées de httpClient)
  async get<T>(url: string, config?: any): Promise<T> {
    return httpClient.get(url, config);
  }

  async post<T>(url: string, data?: any, config?: any): Promise<T> {
    return httpClient.post(url, data, config);
  }

  async put<T>(url: string, data?: any, config?: any): Promise<T> {
    return httpClient.put(url, data, config);
  }

  async delete<T>(url: string, config?: any): Promise<T> {
    return httpClient.delete(url, config);
  }

  async patch<T>(url: string, data?: any, config?: any): Promise<T> {
    return httpClient.patch(url, data, config);
  }

  // Méthodes utilitaires
  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  getCurrentUser() {
    return this.auth.getCurrentUser();
  }

  logout(): void {
    this.auth.logout();
  }

  // Configuration de l'API
  setBaseURL(url: string): void {
    // Cette méthode pourrait être implémentée si nécessaire
    console.log('Base URL:', url);
  }

  // Méthode pour vérifier la santé de l'API
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    try {
      return await this.get('/health');
    } catch (error) {
      throw new Error('API non disponible');
    }
  }
}

export const apiService = new ApiService();
export default apiService;
