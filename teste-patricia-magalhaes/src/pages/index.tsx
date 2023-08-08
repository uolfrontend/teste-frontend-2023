import { useEffect, useState } from "react";

import { defaultTheme } from "../styles/themes/default";
import { Button } from "../components/Button";
import { ICustomerInfo, getAllCustomers } from "../services/customersAPI";

export default function Home() {
  const [customers, setCustomers] = useState<ICustomerInfo[]>([]);

  useEffect(() => {
    getAllCustomers().then((response: ICustomerInfo[]) =>
      setCustomers(response)
    );
  }, []);

  return (
    <>
      <h1>Teste Front-End - UOL Host</h1>
      <Button />
      {customers.map((customer: ICustomerInfo) => {
        return (
          <p
            key={customer.id}
            style={{
              fontWeight: defaultTheme.FONTWEIGHT.light,
              fontSize: defaultTheme.FONTSIZE.xs,
            }}
          >
            {customer.name}
          </p>
        );
      })}
    </>
  );
}
