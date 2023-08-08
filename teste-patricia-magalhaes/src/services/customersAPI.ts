import axios from "axios";

const baseURL = "https://test-frontend-uolpp.web.app/customers.json";

const api = axios.create({
  baseURL: baseURL,
});

export const getAllCustomers = () =>
  api.get(baseURL).then((response) => response);
