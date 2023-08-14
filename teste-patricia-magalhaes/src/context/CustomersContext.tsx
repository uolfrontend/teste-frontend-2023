import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ICustomerInfo } from "../services/customersAPI";

export interface CustomerContextData {
  filtered: ICustomerInfo[];
  setFiltered: Dispatch<SetStateAction<ICustomerInfo[]>>;
  columns: string[];
  setColumns: Dispatch<SetStateAction<string[]>>;
}

export const CustomerContext = createContext<CustomerContextData | undefined>(
  undefined
);

export const CustomerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filtered, setFiltered] = useState<ICustomerInfo[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  return (
    <CustomerContext.Provider
      value={{ filtered, setFiltered, columns, setColumns }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
