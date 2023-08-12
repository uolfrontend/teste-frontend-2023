import { useContext } from "react";
import { CustomerContext } from "../context/CustomersContext";

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error("Contexto não encontrado!");
  }

  return context;
};
