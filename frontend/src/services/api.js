const API_BASE_URL = 'http://localhost:3000/api';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (data.success) {
      this.setToken(data.token);
    }
    
    return data;
  }

  async register(email, password) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (data.success) {
      this.setToken(data.token);
    }
    
    return data;
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  logout() {
    this.setToken(null);
  }

  // Plans endpoints
  async getPlans(operator = null) {
    const query = operator ? `?operator=${operator}` : '';
    return this.request(`/plans${query}`);
  }

  async getPlan(id) {
    return this.request(`/plans/${id}`);
  }

  async createPlan(planData) {
    return this.request('/plans', {
      method: 'POST',
      body: JSON.stringify(planData),
    });
  }

  async updatePlan(id, planData) {
    return this.request(`/plans/${id}`, {
      method: 'PUT',
      body: JSON.stringify(planData),
    });
  }

  async deletePlan(id) {
    return this.request(`/plans/${id}`, {
      method: 'DELETE',
    });
  }

  // Transactions endpoints
  async createTransaction(transactionData) {
    return this.request('/transactions', {
      method: 'POST',
      body: JSON.stringify(transactionData),
    });
  }

  async getTransactions() {
    return this.request('/transactions');
  }

  async getTransaction(id) {
    return this.request(`/transactions/${id}`);
  }

  async getTransactionStatus(id) {
    return this.request(`/transactions/${id}/status`);
  }
}

export default new ApiService();