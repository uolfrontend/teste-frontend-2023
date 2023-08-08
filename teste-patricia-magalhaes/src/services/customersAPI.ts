import axios, { AxiosError } from "axios";

export interface ICustomerInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

const baseURL = "http://localhost:3000/customers";

const api = axios.create({
  baseURL: baseURL,
});

export const getAllCustomers = (): Promise<ICustomerInfo[]> =>
  api
    .get(baseURL)
    .then((response) => response.data)
    .catch((error: AxiosError) =>
      console.error("Ops, ocorreu um erro!", error.response)
    );
