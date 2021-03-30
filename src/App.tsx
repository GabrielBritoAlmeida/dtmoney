import Dashboard from 'components/Dashboard'
import { Header } from 'components/Header'
import { TransactionsTable } from 'components/TransactionsTable'
import { GlobalStyles } from 'styles/global'
import { createServer } from 'miragejs'
import { useState } from 'react'
import { NewTransactionModal } from 'components/NewTransactionModal'
import ReactModal from 'react-modal'

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

ReactModal.setAppElement('#root')

export const App: React.FC = () => {
  const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] = useState(
    false
  )

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionsTable />

      <NewTransactionModal
        isOpen={isNewModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </>
  )
}
