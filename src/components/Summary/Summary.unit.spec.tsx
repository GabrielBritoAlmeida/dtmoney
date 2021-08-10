import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { images } from 'images'

import Summary from '.'

const summary = {
  deposit: 0,
  withdrawn: 0,
  total: 0
}

jest.mock('hooks/useTransactions', () => ({
  useTransactions: () => ({
    summary
  })
}))

describe('<Summary />', () => {
  it('should render the component Summary', () => {
    renderWithTheme(<Summary />)

    const summary = screen.getByLabelText(
      'Summary of expenses, outgoing and incoming'
    )

    expect(summary).toBeInTheDocument()
  })

  it('should render the component Summary with text "Entradas", "Saídas", "Total"', () => {
    renderWithTheme(<Summary />)

    const entradas = screen.getByText('Entradas')
    const saidas = screen.getByText('Saídas')
    const total = screen.getByText('Total')

    expect(entradas).toBeInTheDocument()
    expect(saidas).toBeInTheDocument()
    expect(total).toBeInTheDocument()
  })

  it('should render the component Summary with incomeImg', () => {
    renderWithTheme(<Summary />)

    const incomeImg = screen.getByAltText(
      'Ícone com circulo e uma seta apontando para cima, indicando entrada de valor'
    )

    expect(incomeImg).toHaveAttribute('src', images.incomeImg)
    expect(incomeImg).toBeInTheDocument()
  })

  it('should render the component Summary with outcomeImg', () => {
    renderWithTheme(<Summary />)

    const outcomeImg = screen.getByAltText(
      'Ícone com circulo e uma seta apontando para baixo, indicando saída de valor'
    )

    expect(outcomeImg).toHaveAttribute('src', images.outcomeImg)
    expect(outcomeImg).toBeInTheDocument()
  })

  it('should render the component Summary with totalImg', () => {
    renderWithTheme(<Summary />)

    const totalImg = screen.getByAltText(
      'Ícone com circulo e símbolo de cifrão para valor monetário, representando o valor total'
    )

    expect(totalImg).toHaveAttribute('src', images.totalImg)
    expect(totalImg).toBeInTheDocument()
  })
})
