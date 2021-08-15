import React from 'react'
import { FormEvent, useState } from 'react'

import Modal from 'react-modal'
import CloseImg from 'assets/close.svg'
import * as S from './styles'

import ImgIncome from 'assets/income.svg'
import ImgOutcome from 'assets/outcome.svg'
import { useTransactions } from 'hooks/useTransactions'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
  ...props
}: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions()
  const [title, setTitle] = useState('')
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  function disabledButtonRegister() {
    if (title && type && category && amount) {
      return false
    }
    return true
  }

  async function handleCreatNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({ title, amount, category, type })

    setTitle('')
    setType('deposit')
    setCategory('')
    setAmount(0)
    onRequestClose()
  }

  if (!isOpen) return <div data-testid="modal-close" />

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
      {...props}
    >
      <S.Form onSubmit={handleCreatNewTransaction} data-testid="form-modal">
        <S.ButtonCloseModal
          aria-label="Botão com x, para fechar o modal"
          type="button"
          onClick={onRequestClose}
        >
          <img src={CloseImg} alt="imagem letra x" />
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

        <S.ButtonSubmit type="submit" disabled={disabledButtonRegister()}>
          Cadastrar
        </S.ButtonSubmit>
      </S.Form>
    </Modal>
  )
}
