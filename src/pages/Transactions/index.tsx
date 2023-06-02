import { useEffect, useState } from "react";

import { Header } from "@components/Header";
import { Pagination } from "@components/Pagination";
import { SearchForm } from "@components/SearchForm";
import { Summary } from "@components/Summary";
import { TransactionsTable } from "@components/TransactionsTable";

import { apiService } from "@services/api";

import { TransactionsContainer } from "./styles";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  value: number;
  createdAt: string;
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = async () => {
    const response = await apiService.get("/transactions");

    setTransactions(response.data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable transactions={transactions} />
        <Pagination />
      </TransactionsContainer>
    </div>
  );
};
