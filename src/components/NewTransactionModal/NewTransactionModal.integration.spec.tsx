import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { NewTransactionModal } from '.'
import userEvent from '@testing-library/user-event'
import ReactModal from 'react-modal'

describe('<NewTransactionModal /> - integration', () => {
  const onRequestClose = jest.fn()
  const isOpen = true

  beforeEach(() => {
    const el = document.createElement('div')
    el.id = 'root'
    document.body.appendChild(el)

    ReactModal.setAppElement('#root')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the modal body', () => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const modal = screen.getByRole('dialog')
    expect(modal).toBeInTheDocument()
  })

  it('should perform the action of closing the modal, by clicking on the close fluff', async () => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const button = screen.getByLabelText('Botão com x, para fechar o modal')

    userEvent.click(button)
    expect(onRequestClose).toHaveBeenCalledTimes(1)
    expect(onRequestClose).toHaveLength(0)
  })

  it('should set a value in the transaction title input', async () => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const inputTitle = screen.getByPlaceholderText('Título')
    const inputText = 'new transaction test'

    userEvent.type(inputTitle, inputText)

    expect(inputTitle).toHaveValue(inputText)
  })

  it('should set a value in the transaction value input', async () => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const inputTitle = screen.getByPlaceholderText('Valor')
    const inputText = '300'

    userEvent.type(inputTitle, inputText)
    expect(inputTitle).toHaveValue(300)
  })

  it('should render the modal, with input button selected, then select "output" type with click', async () => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const buttonExit = screen.getByRole('button', {
      name: 'button of withdraw'
    })

    userEvent.click(buttonExit)

    expect(buttonExit).toHaveStyle('background-color: rgba(229, 46, 77, 0.1)')
  })

  it('should set a value in category input', async () => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const inputTitle = screen.getByPlaceholderText('Categoria')
    const inputText = 'Teste Jest'

    userEvent.type(inputTitle, inputText)
    expect(inputTitle).toHaveValue(inputText)
  })

  it('should render the button as disabled if all fields are not filled', async () => {
    renderWithTheme(
      <NewTransactionModal isOpen={isOpen} onRequestClose={onRequestClose} />
    )

    const buttonCadastrar = screen.getByRole('button', {
      name: 'button of register'
    })

    expect(buttonCadastrar).toBeDisabled()
  })
})
