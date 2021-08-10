import React from 'react'
import * as S from './styles'

type ImageProps = {
  src: string
  alt: string
}

export const Image = ({ alt, src }: ImageProps) => (
  <S.Image src={src} alt={alt} />
)
