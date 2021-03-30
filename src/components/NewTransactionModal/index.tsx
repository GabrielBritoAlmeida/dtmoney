import Modal from 'react-modal'
import CloseImg from 'assets/close.svg'
import * as S from './styles'

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
        <S.Input type="text" placeholder="Categoria" />

        <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
      </S.Form>
    </Modal>
  )
}
