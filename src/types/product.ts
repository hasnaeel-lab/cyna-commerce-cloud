
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
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}
