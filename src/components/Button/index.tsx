import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonTypes> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>
}
