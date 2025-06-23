
import httpClient from '@/utils/httpClient';
import { CartItem } from '@/types/order';
import { Product } from '@/types/product';

export interface CartSummary {
  items: CartItem[];
  total: number;
  itemCount: number;
}

class CartService {
  // Récupérer le panier de l'utilisateur
  async getCart(): Promise<CartSummary> {
    try {
      const response = await httpClient.get<CartSummary>('/cart');
      return response;
    } catch (error) {
      console.error('Erreur récupération panier:', error);
      throw new Error('Impossible de charger le panier');
    }
  }

  // Ajouter un produit au panier
  async addToCart(productId: string, quantity: number = 1): Promise<CartItem> {
    try {
      const response = await httpClient.post<CartItem>('/cart/add', {
        productId,
        quantity
      });
      return response;
    } catch (error) {
      console.error('Erreur ajout au panier:', error);
      throw new Error('Impossible d\'ajouter le produit au panier');
    }
  }

  // Mettre à jour la quantité d'un produit dans le panier
  async updateCartItem(cartItemId: string, quantity: number): Promise<CartItem> {
    try {
      const response = await httpClient.put<CartItem>(`/cart/items/${cartItemId}`, {
        quantity
      });
      return response;
    } catch (error) {
      console.error('Erreur mise à jour panier:', error);
      throw new Error('Impossible de mettre à jour le panier');
    }
  }

  // Supprimer un produit du panier
  async removeFromCart(cartItemId: string): Promise<void> {
    try {
      await httpClient.delete(`/cart/items/${cartItemId}`);
    } catch (error) {
      console.error('Erreur suppression du panier:', error);
      throw new Error('Impossible de supprimer le produit du panier');
    }
  }

  // Vider le panier
  async clearCart(): Promise<void> {
    try {
      await httpClient.delete('/cart/clear');
    } catch (error) {
      console.error('Erreur vidage panier:', error);
      throw new Error('Impossible de vider le panier');
    }
  }

  // Compter les articles dans le panier
  async getCartItemCount(): Promise<number> {
    try {
      const response = await httpClient.get<{ count: number }>('/cart/count');
      return response.count;
    } catch (error) {
      console.error('Erreur comptage panier:', error);
      return 0;
    }
  }
}

export const cartService = new CartService();
export default cartService;
