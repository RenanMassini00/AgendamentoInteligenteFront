import { api } from '../api/axios';
import type { Client } from '../../types/client.types';

export const clientsService = {
  async getAll(): Promise<Client[]> {
    const response = await api.get('/clients');
    return response.data;
  },

  async getById(id: string): Promise<Client> {
    const response = await api.get(`/clients/${id}`);
    return response.data;
  },

  async create(payload: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>): Promise<Client> {
    const response = await api.post('/clients', payload);
    return response.data;
  },

  async update(id: string, payload: Partial<Client>): Promise<Client> {
    const response = await api.put(`/clients/${id}`, payload);
    return response.data;
  },

  async remove(id: string): Promise<void> {
    await api.delete(`/clients/${id}`);
  },
};