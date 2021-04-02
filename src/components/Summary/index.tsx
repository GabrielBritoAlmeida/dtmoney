import { useTransactions } from 'hooks/useTransactions'

import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import totalImg from 'assets/total.svg'

import * as S from './styles'
import { realMoney } from 'utils/realMoney'

const Summary: React.FC = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'deposit') {
        accumulator.deposit += transaction.amount
        accumulator.total += transaction.amount
      } else {
        accumulator.withdrawn += transaction.amount
        accumulator.total -= transaction.amount
      }

      return accumulator
    },
    {
      deposit: 0,
      withdrawn: 0,
      total: 0
    }
  )

  return (
    <S.Wrapper>
      <S.Box>
        <S.Header>
          <S.TitleHeader>Entradas</S.TitleHeader>
          <img
            src={incomeImg}
            alt="Ícone com circulo e uma seta apontando para cima, indicando entrada de valor"
          />
        </S.Header>
        <S.Value>{realMoney(summary.deposit)}</S.Value>
      </S.Box>

      <S.Box>
        <S.Header>
          <S.TitleHeader>Saídas</S.TitleHeader>
          <img
            src={outcomeImg}
            alt="Ícone com circulo e uma seta apontando para baixo, indicando saída de valor"
          />
        </S.Header>
        <S.Value>-{realMoney(summary.withdrawn)}</S.Value>
      </S.Box>

      <S.Box className="highlight-background">
        <S.Header>
          <S.TitleHeader>Total</S.TitleHeader>
          <img
            src={totalImg}
            alt="Ícone com circulo e símbolo de cifrão para valor monetário, representando o valor total"
          />
        </S.Header>
        <S.Value>{realMoney(summary.total)}</S.Value>
      </S.Box>
    </S.Wrapper>
  )
}

export default Summary
