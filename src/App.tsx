import Dashboard from 'components/Dashboard'
import { Header } from 'components/Header'
import { TransactionsTable } from 'components/TransactionsTable'
import { GlobalStyles } from 'styles/global'
import { createServer, Model } from 'miragejs'
import { useState } from 'react'
import { NewTransactionModal } from 'components/NewTransactionModal'
import ReactModal from 'react-modal'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Web',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-03-31 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-03-30 08:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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
