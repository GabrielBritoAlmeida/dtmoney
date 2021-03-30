import Modal from 'react-modal'

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
    <S.Container>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastrar transação</h2>
      </Modal>
    </S.Container>
  )
}
