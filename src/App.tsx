import Dashboard from 'components/Dashboard'
import { Header } from 'components/Header'
import { TransactionsTable } from 'components/TransactionsTable'
import { GlobalStyles } from 'styles/global'
import { createServer, Model } from 'miragejs'
import { useState } from 'react'
import { NewTransactionModal } from 'components/NewTransactionModal'
import ReactModal from 'react-modal'

interface IDataSchema {
  title: string
  type: string
  category: string
  value: number
}

createServer({
  models: {
    transaction: Model
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
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
