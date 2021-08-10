import React from 'react'
import { images } from '../../images'
import { Button } from '../Button'
import { Image } from '../Image'

import * as S from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewTransactionModal,
  ...props
}: HeaderProps) => {
  return (
    <S.Wrapper
      id="header-id"
      aria-label="header with logo and button new transaction"
      {...props}
    >
      <S.Container>
        <Image
          src={images.logoImg}
          alt="Logo com símbolo de cifrão, com fundo verde e ao lado escrito dt-money"
        />
        <Button onClick={onOpenNewTransactionModal}>Nova transação</Button>
      </S.Container>
    </S.Wrapper>
  )
}
