import { useMemo } from 'react'
import { useTransactions } from 'hooks/useTransactions'
import { realMoney } from 'utils/realMoney'
import { conversionDate } from 'utils/conversionDate'

import * as S from './styles'

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions()

  const allTransactions = useMemo(
    () =>
      transactions.length &&
      transactions.map((transaction) => (
        <S.Tr key={transaction.id}>
          <S.Td>{transaction.title}</S.Td>
          {transaction.type === 'deposit' ? (
            <S.TdDeposit>{realMoney(transaction.amount)}</S.TdDeposit>
          ) : (
            <S.TdWithDrown>-{realMoney(transaction.amount)}</S.TdWithDrown>
          )}
          <S.Td>{transaction.category}</S.Td>
          <S.Td>{conversionDate(transaction.createdAt)}</S.Td>
        </S.Tr>
      )),
    [transactions]
  )

  return (
    <S.Wrapper>
      <S.Table>
        <S.TableHeader>
          <S.Tr>
            <S.Th>Título</S.Th>
            <S.Th>Valor</S.Th>
            <S.Th>Categoria</S.Th>
            <S.Th>Data</S.Th>
          </S.Tr>
        </S.TableHeader>

        <S.TableBody>{allTransactions}</S.TableBody>
      </S.Table>
    </S.Wrapper>
  )
}
