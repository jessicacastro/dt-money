import { apiService } from '@services/api'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  value: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[]
  loadTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async (query?: string) => {
    const response = await apiService.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'asc',
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async (data: CreateTransactionInput) => {
    const { description, value, category, type } = data

    const newTransaction = await apiService.post('/transactions', {
      description,
      category,
      type,
      value,
      createdAt: new Date().toISOString(),
    })

    setTransactions((prevState) => [...prevState, newTransaction.data])
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, loadTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
