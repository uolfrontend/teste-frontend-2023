import { api } from './api';
import { DataProps } from '../types';

export const GetCustomers = async () => {
  try {
    const response = await api.get<DataProps>('/customers.json');
    return response;
  } catch (error) {
    console.log('Erro ao acessar end point', error);
  }
};
