import React from 'react'
import { Teste } from '.'
import { renderWithTheme } from '../../utils/test/helpers'

describe('<Teste />', () => {
  it('should render Teste', () => {
    renderWithTheme(<Teste />)
  })
})
