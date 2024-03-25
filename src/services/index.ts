import { AxiosError } from 'axios'
import { api } from './axios'

export async function getCustomers() {
  try {
    const response = await api.get('/customers')

    const { data } = response

    return data
  } catch (error) {
    const AxiosError = error as AxiosError

    return AxiosError.response?.data
  }
}
