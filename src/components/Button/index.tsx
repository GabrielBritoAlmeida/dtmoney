import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonTypes> = ({ children }) => {
  return <S.Button>{children}</S.Button>
}
