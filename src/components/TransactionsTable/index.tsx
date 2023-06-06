import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '@contexts/TransactionsContext'

import { dateFormatter, valueFormatter } from '@utils/formatter'

import { PriceHighlight, TransactionsTableContainer } from './styles'

export const TransactionsTable = () => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return (
    <TransactionsTableContainer>
      <tbody>
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {valueFormatter.format(transaction.value)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter(transaction.createdAt)}</td>
            </tr>
          ))}
      </tbody>
    </TransactionsTableContainer>
  )
}
