import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { Container } from './styles'

interface CardProps {
  type: 'entrada' | 'saida' | 'total'
}

export function Card({ type }: CardProps) {
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
      <span>R$ 17.400,00</span>
    </Container>
  )
}
