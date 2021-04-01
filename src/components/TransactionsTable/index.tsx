import { useContext, useMemo } from 'react'
import { RealMoney } from 'utils/realMoney'
import { ConversionDate } from 'utils/conversionDate'

import * as S from './styles'
import { TransactionsContext } from 'context/TransactionsContext'

export const TransactionsTable: React.FC = () => {
  const { transactions } = useContext(TransactionsContext)

  const allTransactions = useMemo(
    () =>
      transactions.length &&
      transactions.map((transaction) => (
        <S.Tr key={transaction.id}>
          <S.Td>{transaction.title}</S.Td>
          {transaction.type === 'deposit' ? (
            <S.TdDeposit>{RealMoney(transaction.amount)}</S.TdDeposit>
          ) : (
            <S.TdWithDrown>-{RealMoney(transaction.amount)}</S.TdWithDrown>
          )}
          <S.Td>{transaction.category}</S.Td>
          <S.Td>{ConversionDate(transaction.createdAt)}</S.Td>
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
