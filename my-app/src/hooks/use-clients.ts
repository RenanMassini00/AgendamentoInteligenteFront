import { useQuery } from '@tanstack/react-query';
import { clientsService } from '../services/clients/clients.service';

export function useClients() {
  return useQuery({
    queryKey: ['clients'],
    queryFn: clientsService.getAll,
  });
}