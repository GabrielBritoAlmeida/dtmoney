// import { screen } from '@testing-library/react'
import {Button} from '.'
import {renderWithTheme} from 'utils/helpers'

describe('<Button />', () => {
  it('should render button', () => {
    renderWithTheme(<Button>Hello Button</Button>)


  })
})
