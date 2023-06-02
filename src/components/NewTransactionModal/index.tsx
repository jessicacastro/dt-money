import * as Dialog from "@radix-ui/react-dialog";

import { X } from "phosphor-react";
import { CloseButton, Content, DialogForm, Overlay } from "./styles";

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

        <button type="submit">Cadastrar</button>
      </DialogForm>
    </Content>
  </Dialog.Portal>
);
