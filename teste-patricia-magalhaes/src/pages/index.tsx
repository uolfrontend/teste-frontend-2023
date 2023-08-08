import { ChangeEvent, useEffect, useState } from "react";

import { defaultTheme } from "../styles/themes/default";
import { Button } from "../components/Button";
import { ICustomerInfo, getAllCustomers } from "../services/customersAPI";
import { InputField } from "../components/InputField";

export default function Home() {
  const [customers, setCustomers] = useState<ICustomerInfo[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<ICustomerInfo[]>([]);
  const [variant, setVariant] = useState<"normal" | "success" | "error">(
    "normal"
  );

  useEffect(() => {
    getAllCustomers().then((response: ICustomerInfo[]) =>
      setCustomers(response)
    );
  }, []);

  useEffect(() => {
    setFiltered(
      customers.filter((customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    if (search === "") {
      return setVariant("normal");
    } else if (filtered.length > 0) {
      return setVariant("success");
    } else {
      return setVariant("error");
    }
  }, [customers, search, filtered.length]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        width: "50%",
      }}
    >
      <h1>Teste Front-End - UOL Host</h1>
      <Button />
      <InputField
        variant={variant}
        onChange={handleChange}
        value={search}
      />
      {filtered.map((customer: ICustomerInfo) => {
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
    </div>
  );
}
