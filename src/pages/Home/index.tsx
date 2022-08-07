import { useState } from 'react'

import { Card } from '../../components/Card'
import { Table } from './components/Table'
import { ModalCategory } from './components/ModalCategory'
import { ModalTransaction } from './components/ModalTransaction'

import logo from '../../assets/finance-image.png'
import { CardSection, Container, Header } from './styles'

export interface TransactionListData {
  id: number
  title: string
  value: string
  type: string
  category: string
  date: string
}

export interface CategoriesData {
  id: number
  name: string
}

export function Home() {
  const [showModalCategory, setShowModalCategory] = useState(false)
  const [showModalTransaction, setShowModalTransaction] = useState(false)

  const [transactionList, setTransactionList] = useState<TransactionListData[]>([])

  const [category, setCategory] = useState<CategoriesData[]>([
    { id: 1, name: 'Venda' },
    { id: 2, name: 'Alimentação' },
    { id: 3, name: 'Casa' },
  ])

  function handleShowModalCategory() {
    setShowModalCategory(!showModalCategory)
  }

  function handleShowModalTransaction() {
    setShowModalTransaction(!showModalTransaction)
  }

  function createNewCategory(category: string) {
    const newCategory = {
      id: new Date().getTime(),
      name: category,
    }

    setCategory((state) => [...state, newCategory])
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

  console.log(transactionList)

  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <nav>
          <button onClick={handleShowModalCategory}>Criar categoria</button>
          <button onClick={handleShowModalTransaction}>Transação</button>
        </nav>
      </Header>
      <main>
        <CardSection>
          <Card type="entrada" />
          <Card type="saida" />
          <Card type="total" />
        </CardSection>

        <Table transactionList={transactionList} />
        <ModalCategory
          show={showModalCategory}
          closeModal={handleShowModalCategory}
          createCategory={createNewCategory}
        />
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
