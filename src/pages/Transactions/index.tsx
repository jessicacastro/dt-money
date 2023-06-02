import React from 'react'

import { Header } from '@components/Header'
import { Pagination } from '@components/Pagination'
import { SearchForm } from '@components/SearchForm'
import { Summary } from '@components/Summary'
import { TransactionsTable } from '@components/TransactionsTable'

import { TransactionsContainer } from './styles'

export const Transactions = () => (
  <React.Fragment>
    <Header />
    <Summary />

    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable />
      <Pagination />
    </TransactionsContainer>
  </React.Fragment>
)
