import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import { images } from '../../images'

import { Image } from '.'

describe('<Image />', () => {
  it('should render the Image', () => {
    renderWithTheme(<Image src={images.logoImg} alt="Imagem para teste" />)

    const image = screen.getByAltText('Imagem para teste')

    expect(image).toBeInTheDocument()
  })

  it('should render the component Image with atribute src', () => {
    renderWithTheme(<Image src={images.logoImg} alt="Imagem para teste" />)

    const image = screen.getByAltText('Imagem para teste')

    expect(image).toHaveAttribute('src', images.logoImg)
  })
})
