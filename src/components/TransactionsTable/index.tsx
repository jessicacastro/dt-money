import { PriceHighlight, TransactionsTableContainer } from "./styles";

export const TransactionsTable = () => (
  <TransactionsTableContainer>
    <tbody>
      <tr>
        <td width="50%">Desenvolvimento de site</td>
        <td>
          <PriceHighlight variant="income">R$12.000,00</PriceHighlight>
        </td>
        <td>Venda</td>
        <td>13/04/2022</td>
      </tr>

      <tr>
        <td width="50%">Hamburguer</td>
        <td>
          <PriceHighlight variant="outcome">- R$90,00</PriceHighlight>
        </td>
        <td>Alimentação</td>
        <td>10/04/2022</td>
      </tr>
    </tbody>
  </TransactionsTableContainer>
);
