import { useEffect, useState } from "react";

import { db } from "../data/db";
import { defaultTheme } from "../styles/themes/default";
import { Button } from "../components/Button";

interface ICustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

export default function Home() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    setCustomers(db.customers);
  }, []);

  return (
    <>
      <h1>Teste Front-End - UOL Host</h1>
      <Button />
      {customers.map((customer: ICustomer) => {
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
