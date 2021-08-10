import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import { Header } from '.'

describe('<Header />', () => {
  it('should render the Header', () => {
    renderWithTheme(
      <Header data-testid="header-test" onOpenNewTransactionModal={() => {}} />
    )

    const header = screen.getByTestId('header-test')

    expect(header).toBeInTheDocument()
  })
})
