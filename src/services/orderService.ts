
import httpClient from '@/utils/httpClient';
import { Order, OrderDetail, CartItem, Payment } from '@/types/order';

export interface CreateOrderData {
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  paymentMethod: string;
}

export interface OrderWithDetails extends Order {
  details: OrderDetail[];
  payment?: Payment;
}

class OrderService {
  // Créer une nouvelle commande
  async createOrder(orderData: CreateOrderData): Promise<Order> {
    try {
      const response = await httpClient.post<Order>('/orders', orderData);
      return response;
    } catch (error) {
      console.error('Erreur création commande:', error);
      throw new Error('Impossible de créer la commande');
    }
  }

  // Récupérer les commandes de l'utilisateur connecté
  async getUserOrders(): Promise<OrderWithDetails[]> {
    try {
      const response = await httpClient.get<OrderWithDetails[]>('/orders/user');
      return response;
    } catch (error) {
      console.error('Erreur récupération commandes:', error);
      throw new Error('Impossible de charger les commandes');
    }
  }

  // Récupérer une commande par ID
  async getOrderById(orderId: string): Promise<OrderWithDetails> {
    try {
      const response = await httpClient.get<OrderWithDetails>(`/orders/${orderId}`);
      return response;
    } catch (error) {
      console.error('Erreur récupération commande:', error);
      throw new Error('Commande non trouvée');
    }
  }

  // Mettre à jour le statut d'une commande
  async updateOrderStatus(orderId: string, status: Order['status']): Promise<Order> {
    try {
      const response = await httpClient.patch<Order>(`/orders/${orderId}/status`, { status });
      return response;
    } catch (error) {
      console.error('Erreur mise à jour statut:', error);
      throw new Error('Impossible de mettre à jour la commande');
    }
  }

  // Annuler une commande
  async cancelOrder(orderId: string): Promise<Order> {
    try {
      const response = await httpClient.patch<Order>(`/orders/${orderId}/cancel`);
      return response;
    } catch (error) {
      console.error('Erreur annulation commande:', error);
      throw new Error('Impossible d\'annuler la commande');
    }
  }
}

export const orderService = new OrderService();
export default orderService;
