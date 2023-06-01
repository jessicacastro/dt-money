import { Header } from "@components/Header";
import { Pagination } from "@components/Pagination";
import { SearchForm } from "@components/SearchForm";
import { Summary } from "@components/Summary";
import { TransactionsTable } from "@components/TransactionsTable";
import { TransactionsContainer } from "./styles";

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable />
        <Pagination />
      </TransactionsContainer>
    </div>
  );
};
