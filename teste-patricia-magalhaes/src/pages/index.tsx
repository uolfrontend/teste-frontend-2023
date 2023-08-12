import { ChangeEvent, useEffect, useState } from "react";

import { Button } from "../components/Button";
import { ICustomerInfo, getAllCustomers } from "../services/customersAPI";
import { InputField } from "../components/InputField";
import { Table } from "../components/Table";
import { NotFound } from "../components/NotFound";
import { Container } from "../components/Container/styles";
import { useCustomerContext } from "../hooks/useCustomerContext";

export default function Home() {
  const { filtered, setFiltered, setColumns } = useCustomerContext();

  const [customers, setCustomers] = useState<ICustomerInfo[]>([]);
  const [search, setSearch] = useState("");
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
  }, [customers, search, filtered.length, setFiltered]);

  const handleClick = () => {
    getAllCustomers().then((response: ICustomerInfo[]) => {
      setCustomers(response);
      setColumns(
        Object.keys(response[0]).map((column) => column.toUpperCase())
      );
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <header>
        <h1>Front-End Test - UOL Host</h1>
      </header>

      {customers.length === 0 && (
        <Button title={"Load data"} onClick={handleClick} />
      )}

      {customers.length > 0 && (
        <>
          <InputField
            label={"Name"}
            onChange={handleChange}
            value={search}
            $variant={variant}
          />
          {filtered.length > 0 ? <Table /> : <NotFound />}
        </>
      )}
    </Container>
  );
}
