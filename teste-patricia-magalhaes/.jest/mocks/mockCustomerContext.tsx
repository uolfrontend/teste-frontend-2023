import { ReactNode } from "react";
import {
  CustomerContext,
  CustomerContextData,
} from "../../src/context/CustomersContext";
import { ICustomerInfo } from "../../src/services/customersAPI";
import customers from "./dataMock";

export const mockCustomerContext: CustomerContextData = {
  filtered: customers as ICustomerInfo[],
  setFiltered: () => {},
  columns: ["ID", "NAME", "EMAIL", "PHONE", "STATUS"],
  setColumns: () => {},
};

export const MockCustomerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <CustomerContext.Provider value={mockCustomerContext}>
    {children}
  </CustomerContext.Provider>
);
