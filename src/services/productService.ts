
import { Product, Category } from '@/types/product';
import { apiService } from './api';

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  features?: string[];
  sortBy?: 'name' | 'price' | 'popularity' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

export interface ProductSearchResult {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}

class ProductService {
  // Récupérer tous les produits avec filtres
  async getProducts(filters: ProductFilters = {}, page = 1, limit = 12): Promise<ProductSearchResult> {
    try {
      const params = {
        ...filters,
        page,
        limit,
      };
      
      const response = await apiService.get<ProductSearchResult>('/products', { params });
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      throw new Error('Impossible de charger les produits');
    }
  }

  // Récupérer un produit par son ID
  async getProductById(id: string): Promise<Product> {
    try {
      const response = await apiService.get<Product>(`/products/${id}`);
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération du produit:', error);
      throw new Error('Produit introuvable');
    }
  }

  // Recherche intelligente de produits
  async searchProducts(query: string): Promise<Product[]> {
    try {
      if (!query.trim()) return [];
      
      const response = await apiService.get<Product[]>(`/products/search`, {
        params: { q: query }
      });
      
      return response;
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      return [];
    }
  }

  // Recherche avec autocomplétion (première lettre)
  async getProductsSuggestions(firstLetter: string): Promise<Product[]> {
    try {
      if (!firstLetter || firstLetter.length === 0) return [];
      
      const response = await apiService.get<Product[]>(`/products/suggestions`, {
        params: { letter: firstLetter.toLowerCase() }
      });
      
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des suggestions:', error);
      return [];
    }
  }

  // Récupérer les catégories
  async getCategories(): Promise<Category[]> {
    try {
      const response = await apiService.get<Category[]>('/categories');
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
      throw new Error('Impossible de charger les catégories');
    }
  }

  // Récupérer les produits d'une catégorie
  async getProductsByCategory(categoryId: string, page = 1, limit = 12): Promise<ProductSearchResult> {
    try {
      const response = await apiService.get<ProductSearchResult>(`/categories/${categoryId}/products`, {
        params: { page, limit }
      });
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits de la catégorie:', error);
      throw new Error('Impossible de charger les produits de cette catégorie');
    }
  }

  // Récupérer les produits populaires
  async getPopularProducts(limit = 6): Promise<Product[]> {
    try {
      const response = await apiService.get<Product[]>('/products/popular', {
        params: { limit }
      });
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits populaires:', error);
      return [];
    }
  }

  // Récupérer les produits recommandés pour un utilisateur
  async getRecommendedProducts(userId: string, limit = 6): Promise<Product[]> {
    try {
      const response = await apiService.get<Product[]>(`/products/recommended/${userId}`, {
        params: { limit }
      });
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits recommandés:', error);
      return [];
    }
  }

  // Récupérer les produits similaires
  async getSimilarProducts(productId: string, limit = 4): Promise<Product[]> {
    try {
      const response = await apiService.get<Product[]>(`/products/${productId}/similar`, {
        params: { limit }
      });
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits similaires:', error);
      return [];
    }
  }
}

export const productService = new ProductService();
export default productService;
