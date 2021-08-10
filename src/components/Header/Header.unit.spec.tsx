import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import { Header } from '.'

describe('<Header />', () => {
  it('should render the Header', () => {
    const onOpenNewTransactionModal = jest.fn()
    renderWithTheme(
      <Header
        data-testid="header-test"
        onOpenNewTransactionModal={onOpenNewTransactionModal}
      />
    )

    const header = screen.getByTestId('header-test')

    expect(header).toBeInTheDocument()
  })

  it('should render the Header with atribute arial-label', () => {
    const onOpenNewTransactionModal = jest.fn()
    renderWithTheme(
      <Header onOpenNewTransactionModal={onOpenNewTransactionModal} />
    )

    const header = screen.getByLabelText(
      'header with logo dtmoney and button new transaction'
    )

    expect(header).toBeInTheDocument()
  })
})
