
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Intercepteur pour ajouter le token d'authentification
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Intercepteur pour gérer les erreurs de réponse
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Méthodes génériques HTTP
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete(url, config);
    return response.data;
  }

  // Authentification
  async login(email: string, password: string) {
    return this.post('/auth/login', { email, password });
  }

  async register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return this.post('/auth/register', userData);
  }

  async refreshToken() {
    return this.post('/auth/refresh');
  }

  // Produits
  async getProducts(params?: {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    return this.get('/products', { params });
  }

  async getProduct(id: string) {
    return this.get(`/products/${id}`);
  }

  async searchProducts(query: string) {
    return this.get(`/products/search?q=${encodeURIComponent(query)}`);
  }

  // Commandes
  async createOrder(orderData: {
    items: Array<{
      productId: string;
      quantity: number;
      price: number;
    }>;
    billingAddress: any;
    paymentMethod: string;
    total: number;
  }) {
    return this.post('/orders', orderData);
  }

  async getOrders(userId?: string) {
    return this.get('/orders', { params: { userId } });
  }

  async getOrder(orderId: string) {
    return this.get(`/orders/${orderId}`);
  }

  // Panier
  async getCart(userId: string) {
    return this.get(`/cart/${userId}`);
  }

  async addToCart(userId: string, productId: string, quantity: number) {
    return this.post('/cart', { userId, productId, quantity });
  }

  async updateCartItem(cartItemId: string, quantity: number) {
    return this.put(`/cart/${cartItemId}`, { quantity });
  }

  async removeFromCart(cartItemId: string) {
    return this.delete(`/cart/${cartItemId}`);
  }

  // Paiements
  async createPayment(paymentData: {
    orderId: string;
    amount: number;
    currency: string;
    paymentMethod: string;
  }) {
    return this.post('/payments', paymentData);
  }

  async getPayments(orderId?: string) {
    return this.get('/payments', { params: { orderId } });
  }

  // Utilisateurs
  async updateProfile(userData: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  }) {
    return this.put('/users/profile', userData);
  }

  async getUserProfile() {
    return this.get('/users/profile');
  }
}

export const apiService = new ApiService();
export default apiService;
