import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { NewTransactionModal } from '.'

describe('<NewTransactionModal /> - unit', () => {
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

  it('should render NewTransactionModal with button disabled"', () => {
    const onRequestClose = jest.fn()
    const isOpen = true
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const buttonDisabled = screen.getByRole('button', {
      name: /cadastrar/i
    })
    expect(buttonDisabled).toHaveAttribute('disabled')
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
})
