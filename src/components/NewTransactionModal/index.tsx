import Modal from 'react-modal'
import CloseImg from 'assets/close.svg'
import * as S from './styles'

import ImgIncome from 'assets/income.svg'
import ImgOutcome from 'assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          margin: 'auto',
          maxWidth: 576
        }
      }}
    >
      <S.Form>
        <S.ButtonCloseModal type="button" onClick={onRequestClose}>
          <img src={CloseImg} alt="Botão com x, para fechar o modal" />
        </S.ButtonCloseModal>
        <S.TitleForm>Cadastrar transação</S.TitleForm>

        <S.Input type="text" placeholder="Título" />
        <S.Input type="number" placeholder="Valor" />

        <S.TransactionContainer>
          <S.ButtonTransaction>
            <img
              src={ImgIncome}
              alt="Símbolo que representa valor de entrada"
            />
            <span>Entrada</span>
          </S.ButtonTransaction>
          <S.ButtonTransaction>
            <img src={ImgOutcome} alt="Símbolo que representa valor de saída" />
            <span>Saída</span>
          </S.ButtonTransaction>
        </S.TransactionContainer>

        <S.Input type="text" placeholder="Categoria" />

        <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
      </S.Form>
    </Modal>
  )
}
