import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import theme from '../../styles/theme'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button>Teste Button</Button>)

    const button = screen.getByRole('button', { name: /teste button/i })

    expect(button).toBeInTheDocument()
  })

  it('should render the button with style', () => {
    renderWithTheme(<Button>Teste Button</Button>)

    const button = screen.getByRole('button', { name: /teste button/i })

    expect(button).toHaveStyle({
      backgroundColor: `${theme.colors.blueLight}`,
      color: `${theme.colors.white}`,
      border: 0
    })
  })
})
