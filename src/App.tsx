import Dashboard from 'components/Dashboard'
import { Header } from 'components/Header'
import { TransactionsTable } from 'components/TransactionsTable'
import { GlobalStyles } from 'styles/global'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          create: new Date()
        }
      ]
    })
  }
})

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyles />
    </>
  )
}
