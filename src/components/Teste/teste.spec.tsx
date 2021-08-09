// import { screen } from '@testing-library/react'
import { Teste } from '.'
import { renderWithTheme } from 'utils/helpers'

describe('<Teste />', () => {
  it('should render Teste', () => {
    renderWithTheme(<Teste />)
  })
})
