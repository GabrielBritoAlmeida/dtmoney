import Dashboard from 'components/Dashboard'
import { Header } from 'components/Header'
import { TransactionsTable } from 'components/TransactionsTable'
import { GlobalStyles } from 'styles/global'

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
