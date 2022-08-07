import { Coffee, CurrencyDollar, House } from 'phosphor-react'
import { TransactionListData } from '../..'
import { Category, Container, DateT, Title, Value } from './styles'

interface TableProps {
  transactionList: TransactionListData[]
}

export function Table({ transactionList }: TableProps) {
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
              {transaction.type === 'Saque' ? (
                <Value type={transaction.type}>- R$ {transaction.value.replace('.', ',')}</Value>
              ) : (
                <Value type={transaction.type}>R$ {transaction.value.replace('.', ',')}</Value>
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
                  <span>
                    <House size={20} />
                  </span>
                  {transaction.category}
                </Category>
              )}
              <DateT>{transaction.date.split('-').reverse().join('/')}</DateT>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
