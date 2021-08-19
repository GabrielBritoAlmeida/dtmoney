import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
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

interface SummaryProps {
  deposit: number
  withdrawn: number
  total: number
}

interface TransactionsContextProps {
  transactions: ITransactions[]
  summary: SummaryProps
  createTransaction: (transaction: TransactionsInput) => Promise<void>
  type: string
  setType: (type: string) => void
}

const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])
  const [type, setType] = useState<string>('deposit')

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionsInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

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
    <TransactionsContext.Provider
      value={{ transactions, summary, createTransaction, type, setType }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionsContext)
}
