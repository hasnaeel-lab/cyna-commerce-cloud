
import httpClient from '@/utils/httpClient';
import { Product, Category } from '@/types/product';

export interface ProductFilters {
  category?: string;
  search?: string;
  priceMin?: number;
  priceMax?: number;
  isSubscription?: boolean;
  page?: number;
  limit?: number;
}

export interface ProductSearchResponse {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}

class ProductService {
  // Récupérer tous les produits avec filtres
  async getProducts(filters: ProductFilters = {}): Promise<ProductSearchResponse> {
    try {
      const response = await httpClient.get<ProductSearchResponse>('/products', {
        params: filters
      });
      return response;
    } catch (error) {
      console.error('Erreur récupération produits:', error);
      throw new Error('Impossible de charger les produits');
    }
  }

  // Recherche alphabétique intelligente
  async searchProductsByLetter(letter: string): Promise<Product[]> {
    try {
      const response = await httpClient.get<Product[]>(`/products/search/letter/${letter}`);
      return response;
    } catch (error) {
      console.error('Erreur recherche alphabétique:', error);
      throw new Error('Erreur lors de la recherche');
    }
  }

  // Recherche de produits en temps réel
  async searchProducts(query: string): Promise<Product[]> {
    try {
      if (query.length === 1) {
        // Si c'est une seule lettre, utiliser la recherche alphabétique
        return await this.searchProductsByLetter(query);
      }
      
      const response = await httpClient.get<Product[]>('/products/search', {
        params: { q: query }
      });
      return response;
    } catch (error) {
      console.error('Erreur recherche produits:', error);
      throw new Error('Erreur lors de la recherche');
    }
  }

  // Récupérer un produit par ID
  async getProductById(id: string): Promise<Product> {
    try {
      const response = await httpClient.get<Product>(`/products/${id}`);
      return response;
    } catch (error) {
      console.error('Erreur récupération produit:', error);
      throw new Error('Produit non trouvé');
    }
  }

  // Récupérer les catégories
  async getCategories(): Promise<Category[]> {
    try {
      const response = await httpClient.get<Category[]>('/categories');
      return response;
    } catch (error) {
      console.error('Erreur récupération catégories:', error);
      throw new Error('Impossible de charger les catégories');
    }
  }

  // Récupérer les produits par catégorie
  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    try {
      const response = await httpClient.get<Product[]>(`/categories/${categoryId}/products`);
      return response;
    } catch (error) {
      console.error('Erreur produits par catégorie:', error);
      throw new Error('Impossible de charger les produits de cette catégorie');
    }
  }

  // Produits populaires
  async getPopularProducts(limit: number = 6): Promise<Product[]> {
    try {
      const response = await httpClient.get<Product[]>('/products/popular', {
        params: { limit }
      });
      return response;
    } catch (error) {
      console.error('Erreur produits populaires:', error);
      throw new Error('Impossible de charger les produits populaires');
    }
  }

  // Produits recommandés pour un utilisateur
  async getRecommendedProducts(userId?: string): Promise<Product[]> {
    try {
      const response = await httpClient.get<Product[]>('/products/recommended', {
        params: { userId }
      });
      return response;
    } catch (error) {
      console.error('Erreur produits recommandés:', error);
      return []; // Retourner un tableau vide en cas d'erreur
    }
  }
}

export const productService = new ProductService();
export default productService;
