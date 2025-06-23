
import httpClient from '@/utils/httpClient';
import { User, RegisterData } from '@/types/user';

export interface LoginResponse {
  user: User;
  token: string;
  message: string;
}

export interface RegisterResponse {
  user: User;
  token: string;
  message: string;
}

class AuthService {
  // Connexion utilisateur
  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await httpClient.post<LoginResponse>('/auth/login', {
        email,
        password
      });
      
      // Sauvegarder le token et les données utilisateur
      if (response.token) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user_data', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw new Error('Email ou mot de passe incorrect');
    }
  }

  // Inscription utilisateur avec insertion automatique en BD
  async register(userData: RegisterData): Promise<RegisterResponse> {
    try {
      const response = await httpClient.post<RegisterResponse>('/auth/register', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password
      });

      // Sauvegarder automatiquement après inscription
      if (response.token) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user_data', JSON.stringify(response.user));
      }

      return response;
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      throw new Error('Erreur lors de la création du compte');
    }
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    return !!token;
  }

  // Récupérer l'utilisateur actuel
  getCurrentUser(): User | null {
    const userData = localStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  }

  // Récupérer le token
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Actualiser les données utilisateur
  async refreshUserData(): Promise<User> {
    try {
      const response = await httpClient.get<User>('/auth/profile');
      localStorage.setItem('user_data', JSON.stringify(response));
      return response;
    } catch (error) {
      console.error('Erreur de rafraîchissement:', error);
      throw error;
    }
  }

  // Vérifier la validité du token
  async verifyToken(): Promise<boolean> {
    try {
      await httpClient.get('/auth/verify');
      return true;
    } catch (error) {
      this.logout();
      return false;
    }
  }
}

export const authService = new AuthService();
export default authService;
