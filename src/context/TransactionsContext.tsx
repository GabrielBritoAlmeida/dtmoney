import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from 'services/api'

interface ITransactions {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: string
}

type TransactionsInput = Omit<ITransactions, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextProps {
  transactions: ITransactions[]
  createTransaction: (transaction: TransactionsInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transaction: TransactionsInput) {
    await api.post('transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
