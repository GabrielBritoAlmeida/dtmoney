import { useEffect, useMemo, useState } from 'react'
import { api } from 'services/api'
import { RealMoney } from 'utils/realMoney'
import { ConversionDate } from 'utils/consersionDate'

import * as S from './styles'

interface ITransactions {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: string
}

export const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  const allTransactions = useMemo(
    () =>
      transactions.length &&
      transactions.map((transaction) => (
        <S.Tr key={transaction.id}>
          <S.Td>{transaction.title}</S.Td>
          {transaction.type === 'deposit' ? (
            <S.TdDeposit>{RealMoney(transaction.amount)}</S.TdDeposit>
          ) : (
            <S.TdWithDrown>{RealMoney(transaction.amount)}</S.TdWithDrown>
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
