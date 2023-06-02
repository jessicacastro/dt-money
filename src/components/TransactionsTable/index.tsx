import { Transaction } from "@pages/Transactions";

import { PriceHighlight, TransactionsTableContainer } from "./styles";

interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <TransactionsTableContainer>
      <tbody>
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.value}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
      </tbody>
    </TransactionsTableContainer>
  );
};
