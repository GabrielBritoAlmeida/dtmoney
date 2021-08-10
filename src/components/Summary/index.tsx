import React from 'react'
import { images } from 'images'

import { useTransactions } from 'hooks/useTransactions'
import { realMoney } from 'utils/realMoney'
import { Image } from '../Image'

import * as S from './styles'

const Summary: React.FC = () => {
  const { summary } = useTransactions()

  return (
    <S.Wrapper aria-label="Summary of expenses, outgoing and incoming">
      <S.Box>
        <S.Header>
          <S.TitleHeader>Entradas</S.TitleHeader>
          <Image
            src={images.incomeImg}
            alt="Ícone com circulo e uma seta apontando para cima, indicando entrada de valor"
          />
        </S.Header>
        <S.Value>{realMoney(summary.deposit)}</S.Value>
      </S.Box>

      <S.Box>
        <S.Header>
          <S.TitleHeader>Saídas</S.TitleHeader>
          <Image
            src={images.outcomeImg}
            alt="Ícone com circulo e uma seta apontando para baixo, indicando saída de valor"
          />
        </S.Header>
        <S.Value>-{realMoney(summary.withdrawn)}</S.Value>
      </S.Box>

      <S.Box className="highlight-background">
        <S.Header>
          <S.TitleHeader>Total</S.TitleHeader>
          <Image
            src={images.totalImg}
            alt="Ícone com circulo e símbolo de cifrão para valor monetário, representando o valor total"
          />
        </S.Header>
        <S.Value>{realMoney(summary.total)}</S.Value>
      </S.Box>
    </S.Wrapper>
  )
}

export default Summary
