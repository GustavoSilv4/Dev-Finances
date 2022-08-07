import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionListData } from '../../pages/Home'
import { Container } from './styles'

interface CardProps {
  type: 'entrada' | 'saida' | 'total'
  transactionList: TransactionListData[]
}

export function Card({ type, transactionList }: CardProps) {
  const incomeBalance = transactionList.reduce((acc, elemento) => {
    if (elemento.type === 'income') {
      acc += Number(elemento.value)
    }
    return acc
  }, 0)

  const outcomeBalance = transactionList.reduce((acc, elemento) => {
    if (elemento.type === 'outcome') {
      acc += Number(elemento.value)
    }
    return acc
  }, 0)

  function currencyFormat(value: number) {
    const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    return formatted
  }

  const calcTotalBalance = incomeBalance - outcomeBalance

  return (
    <Container typeCard={type}>
      <div>
        {type === 'entrada' && <span>Entradas</span>}
        {type === 'saida' && <span>Saídas</span>}
        {type === 'total' && <span>Total</span>}

        {type === 'entrada' && <ArrowCircleUp size={32} />}
        {type === 'saida' && <ArrowCircleDown size={32} />}
        {type === 'total' && <CurrencyDollar size={32} />}
      </div>

      {type === 'entrada' && <span>{currencyFormat(incomeBalance)}</span>}
      {type === 'saida' && <span>{currencyFormat(outcomeBalance)}</span>}
      {type === 'total' && <span>{currencyFormat(calcTotalBalance)}</span>}
    </Container>
  )
}
