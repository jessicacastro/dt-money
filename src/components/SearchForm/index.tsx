import { useContextSelector } from 'use-context-selector'

import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { TransactionsContext } from '@contexts/TransactionsContext'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

export const SearchForm = () => {
  const loadTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.loadTransactions,
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  const handleSearchTransactions = async ({ query }: SearchFormInputs) => {
    await loadTransactions(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
