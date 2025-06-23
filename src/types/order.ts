
export interface Order {
  id: string;
  userId: string;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  paymentId?: string;
}

export interface OrderDetail {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  productName: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  stripeSessionId?: string;
  createdAt: string;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  addedAt: string;
  product?: Product;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
  isSubscription: boolean;
  subscriptionType?: 'monthly' | 'yearly';
  isActive: boolean;
  createdAt: string;
}
