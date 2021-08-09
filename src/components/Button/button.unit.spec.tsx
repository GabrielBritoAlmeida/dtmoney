import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button>Teste Button</Button>)

    expect(
      screen.getByRole('button', { name: /teste button/i })
    ).toBeInTheDocument()
  })
})
