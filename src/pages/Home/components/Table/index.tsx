import { format } from 'date-fns'
import { Cardholder, Coffee, CurrencyDollar, House } from 'phosphor-react'
import { TransactionListData } from '../..'
import { Category, Container, DateT, Title, Value } from './styles'

interface TableProps {
  transactionList: TransactionListData[]
}

export function Table({ transactionList }: TableProps) {
  function currencyFormat(value: number) {
    const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    return formatted
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction) => (
            <tr key={transaction.id}>
              <Title>{transaction.title}</Title>
              {transaction.type === 'outcome' ? (
                <Value type={transaction.type}>- {currencyFormat(Number(transaction.value))}</Value>
              ) : (
                <Value type={transaction.type}>{currencyFormat(Number(transaction.value))}</Value>
              )}

              {transaction.category === 'Venda' && (
                <Category>
                  <CurrencyDollar size={20} />
                  {transaction.category}
                </Category>
              )}

              {transaction.category === 'Alimentação' && (
                <Category>
                  <Coffee size={20} />
                  {transaction.category}
                </Category>
              )}

              {transaction.category === 'Casa' && (
                <Category>
                  <House size={20} />
                  {transaction.category}
                </Category>
              )}

              {transaction.category === 'Outros' && (
                <Category>
                  <Cardholder size={20} />
                  {transaction.category}
                </Category>
              )}
              <DateT>{format(transaction.date, 'dd/MM/yyyy')}</DateT>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
