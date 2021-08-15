import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { NewTransactionModal } from '.'
import userEvent from '@testing-library/user-event'

describe('<NewTransactionModal /> - integration', () => {
  const onRequestClose = jest.fn()
  const isOpen = true

  beforeEach(() => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the modal body', () => {
    const form = screen.getByTestId('form-modal')
    expect(form).toBeInTheDocument()
  })

  it('should perform the action of closing the modal, by clicking on the close fluff', async () => {
    const button = screen.getByLabelText('Botão com x, para fechar o modal')

    userEvent.click(button)
    await waitFor(() => expect(onRequestClose).toHaveBeenCalledTimes(1))
    expect(onRequestClose).toHaveLength(0)
  })

  it('should set a value in the transaction title input', async () => {
    const inputTitle = screen.getByPlaceholderText('Título')
    const inputText = 'new transaction test'

    userEvent.type(inputTitle, inputText)

    expect(inputTitle).toHaveValue(inputText)
  })

  it('should set a value in the transaction value input', async () => {
    const inputTitle = screen.getByPlaceholderText('Valor')
    const inputText = '300'

    userEvent.type(inputTitle, inputText)
    expect(inputTitle).toHaveValue(300)
  })
})
