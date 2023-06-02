import { CaretLeft, CaretRight } from 'phosphor-react'
import { PaginationContainer } from './styles'

export const Pagination = () => (
  <PaginationContainer>
    <CaretLeft size={32} weight="bold" />
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <CaretRight size={32} weight="bold" />
  </PaginationContainer>
)
