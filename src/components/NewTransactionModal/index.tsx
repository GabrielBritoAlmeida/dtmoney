import { FormEvent, useContext, useState } from 'react'

import Modal from 'react-modal'
import CloseImg from 'assets/close.svg'
import * as S from './styles'

import ImgIncome from 'assets/income.svg'
import ImgOutcome from 'assets/outcome.svg'

import { TransactionsContext } from 'context/TransactionsContext'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext)
  const [title, setTitle] = useState('')
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  function handleCreatNewTransaction(event: FormEvent) {
    event.preventDefault()
    createTransaction({ title, amount, category, type })
  }

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
      <S.Form onSubmit={handleCreatNewTransaction}>
        <S.ButtonCloseModal type="button" onClick={onRequestClose}>
          <img src={CloseImg} alt="Botão com x, para fechar o modal" />
        </S.ButtonCloseModal>
        <S.TitleForm>Cadastrar transação</S.TitleForm>

        <S.Input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <S.Input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <S.TransactionContainer>
          <S.ButtonTransaction
            isActive={type === 'deposit'}
            activeColor="green"
            type="button"
            onClick={() => {
              setType('deposit')
            }}
          >
            <img
              src={ImgIncome}
              alt="Símbolo que representa valor de entrada"
            />
            <span>Entrada</span>
          </S.ButtonTransaction>
          <S.ButtonTransaction
            isActive={type === 'withdraw'}
            activeColor="red"
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
          >
            <img src={ImgOutcome} alt="Símbolo que representa valor de saída" />
            <span>Saída</span>
          </S.ButtonTransaction>
        </S.TransactionContainer>

        <S.Input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
      </S.Form>
    </Modal>
  )
}
