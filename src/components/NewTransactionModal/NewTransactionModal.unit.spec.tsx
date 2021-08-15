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

    const modal = screen.getByRole('heading', { name: /cadastrar transação/i })

    expect(modal).toBeInTheDocument()
  })

  it('should render the NewTransactionModal with isOpen=false', () => {
    const onRequestClose = jest.fn()
    const isOpen = false
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const modal = screen.getByTestId('modal-close')

    expect(modal).toBeInTheDocument()
  })
})
