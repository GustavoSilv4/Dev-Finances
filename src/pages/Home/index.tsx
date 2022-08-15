import { useState } from 'react'

import { Card } from '../../components/Card'
import { Table } from './components/Table'
import { ModalTransaction } from './components/ModalTransaction'

import logo from '../../assets/finance-image.png'
import { CardSection, Container, HeaderBackground, HeaderContent } from './styles'

export interface TransactionListData {
  id: number
  title: string
  value: string
  type: 'income' | 'outcome'
  category: string
  date: Date
}

export interface CategoriesData {
  id: number
  name: string
}

export function Home() {
  const [showModalTransaction, setShowModalTransaction] = useState(false)

  const [transactionList, setTransactionList] = useState<TransactionListData[]>([])

  const [category] = useState<CategoriesData[]>([
    { id: 1, name: 'Venda' },
    { id: 2, name: 'Alimentação' },
    { id: 3, name: 'Casa' },
    { id: 4, name: 'Outros' },
  ])

  function handleShowModalTransaction() {
    setShowModalTransaction(!showModalTransaction)
  }

  function createNewTransaction(data: TransactionListData) {
    const newTransaction = {
      id: data.id,
      title: data.title,
      value: data.value,
      type: data.type,
      category: data.category,
      date: data.date,
    }

    setTransactionList((state) => [...state, newTransaction])
  }

  return (
    <Container>
      <HeaderBackground>
        <HeaderContent>
          <img src={logo} alt="" />
          <nav>
            <button onClick={handleShowModalTransaction}>New Transação</button>
          </nav>
        </HeaderContent>
      </HeaderBackground>
      <main>
        <CardSection>
          <Card type="entrada" transactionList={transactionList} />
          <Card type="saida" transactionList={transactionList} />
          <Card type="total" transactionList={transactionList} />
        </CardSection>

        <Table transactionList={transactionList} />
        <ModalTransaction
          show={showModalTransaction}
          closeModal={handleShowModalTransaction}
          categories={category}
          createTransaction={createNewTransaction}
        />
      </main>
    </Container>
  )
}
