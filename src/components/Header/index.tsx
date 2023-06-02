import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '@components/NewTransactionModal'

import logoImg from '@assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
