import { Container } from './styles'

export function Table() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2020</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td>R$ 5.400,00</td>
            <td>Alimentação</td>
            <td>10/04/2020</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td>- R$ 59,00</td>
            <td>Casa</td>
            <td>27/03/2020</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td>- R$ 1.200,00</td>
            <td>Venda</td>
            <td>15/03/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
