import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { NewTransactionModal } from '.'
import ReactModal from 'react-modal'
import { TransactionsProvider } from 'hooks/useTransactions'

describe('<NewTransactionModal /> - unit', () => {
  beforeEach(() => {
    const el = document.createElement('div')
    el.id = 'root'
    document.body.appendChild(el)

    ReactModal.setAppElement('#root')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the NewTransactionModal', () => {
    const onRequestClose = jest.fn()
    const isOpen = true
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const modal = screen.getByRole('dialog')
    expect(modal).toBeInTheDocument()
  })

  it('should not render the NewTransactionModal "isOpen=false"', () => {
    const onRequestClose = jest.fn()
    const isOpen = false
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const modalClose = screen.getByTestId('modal-close')
    expect(modalClose).toBeInTheDocument()
  })

  it('should render NewTransactionModal with title "Cadastrar transação"', () => {
    const onRequestClose = jest.fn()
    const isOpen = true
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const modalTitle = screen.getByRole('heading', {
      name: /cadastrar transação/i
    })
    expect(modalTitle).toBeInTheDocument()
  })

  it('should render NewTransactionModal with button "Entrada" and "Saída"', () => {
    const onRequestClose = jest.fn()
    const isOpen = true
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const buttonEnter = screen.getByText(/entrada/i)
    const buttonExit = screen.getByText(/saída/i)

    expect(buttonEnter).toBeInTheDocument()
    expect(buttonExit).toBeInTheDocument()
  })

  it('should render NewTransactionModal with button "amount"', () => {
    const onRequestClose = jest.fn()
    const isOpen = true
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const buttonAmount = screen.getByRole('spinbutton')

    expect(buttonAmount).toBeInTheDocument()
  })

  it('should render the button as disabled if all fields are not filled', async () => {
    const onRequestClose = jest.fn()
    const isOpen = true

    renderWithTheme(
      <TransactionsProvider>
        <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
      </TransactionsProvider>
    )

    const buttonCadastrar = screen.getByRole('button', {
      name: 'button of register'
    })

    expect(buttonCadastrar).toHaveAttribute('disabled', '')
  })
})
