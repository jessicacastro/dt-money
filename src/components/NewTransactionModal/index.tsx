import * as Dialog from "@radix-ui/react-dialog";

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import {
  CloseButton,
  Content,
  DialogForm,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "./styles";

export const NewTransactionModal = () => (
  <Dialog.Portal>
    <Overlay />

    <Content>
      <CloseButton>
        <X size={24} />
      </CloseButton>

      <Dialog.Title>Nova transação</Dialog.Title>

      <DialogForm>
        <input type="text" placeholder="Descrição" required />
        <input type="number" placeholder="Preço" required />
        <input type="text" placeholder="Categoria" required />

        <TransactionTypeContainer>
          <TransactionTypeButton value="income" variant="income">
            <ArrowCircleUp size={24} />
            Entrada
          </TransactionTypeButton>
          <TransactionTypeButton value="outcome" variant="outcome">
            <ArrowCircleDown size={24} />
            Saída
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </DialogForm>
    </Content>
  </Dialog.Portal>
);