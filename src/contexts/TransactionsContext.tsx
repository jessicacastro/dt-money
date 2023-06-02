import { apiService } from "@services/api";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  value: number;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  loadTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = async (query?: string) => {
    const response = await apiService.get("/transactions", {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "asc",
      },
    });

    setTransactions(response.data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, loadTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
