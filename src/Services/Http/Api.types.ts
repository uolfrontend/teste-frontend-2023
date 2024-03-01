export interface CustomerType {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

export interface CustomerApiResponseType {
  customers: Array<CustomerType>;
}
