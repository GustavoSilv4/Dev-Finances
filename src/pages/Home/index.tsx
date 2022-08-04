import { Card } from '../../components/Card'
import { CardSection, Container, Header } from './styles'

import logo from '../../assets/finance-image.png'
import { Table } from '../../components/Table'

export function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <nav>
          <button>Criar categoria</button>
        </nav>
      </Header>
      <main>
        <CardSection>
          <Card type="entrada" />
          <Card type="saida" />
          <Card type="total" />
        </CardSection>

        <Table />
      </main>
    </Container>
  )
}
