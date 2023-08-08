import { ChangeEvent, useEffect, useState } from "react";

import { Button } from "../components/Button";
import { ICustomerInfo, getAllCustomers } from "../services/customersAPI";
import { InputField } from "../components/InputField";
import { Table } from "../components/Table";
import { NotFound } from "../components/NotFound";

export default function Home() {
  const [customers, setCustomers] = useState<ICustomerInfo[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<ICustomerInfo[]>([]);
  const [variant, setVariant] = useState<"normal" | "success" | "error">(
    "normal"
  );

  useEffect(() => {
    setFiltered(
      customers.filter((customer) =>
        customer.email.toLowerCase().includes(search.toLowerCase())
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

  const handleClick = () => {
    getAllCustomers().then((response: ICustomerInfo[]) =>
      setCustomers(response)
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
        padding: "5rem",
        width: "100%",
      }}
    >
      <header>
        <h1>Teste Front-End - UOL Host</h1>
      </header>

      {customers.length === 0 && (
        <Button title={"Carregar dados"} onClick={handleClick} />
      )}

      {customers.length > 0 && (
        <>
          <InputField
            label={"Name"}
            onChange={handleChange}
            value={search}
            variant={variant}
          />
          {filtered.length > 0 ? <Table data={filtered} /> : <NotFound />}
        </>
      )}
    </div>
  );
}
