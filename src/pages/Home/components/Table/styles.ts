import styled from 'styled-components'

interface TypeProp {
  type: 'income' | 'outcome'
}

export const Container = styled.section`
  margin: 0 10rem 10rem;
  max-height: 30rem;
  overflow: auto;

  @media (max-width: 864px) {
    margin: 0 5rem 10rem;
  }

  @media (max-width: 500px) {
    margin: 0 2rem 10rem;
  }

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
  }

  th {
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem;

    color: ${(props) => props.theme.text};
  }

  td {
    font-size: 1rem;
    padding: 1.25rem 2rem;
    background-color: #ffffff;
    padding: 1rem;

    &:first-child {
      width: 50%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`

export const Title = styled.td`
  color: ${(props) => props.theme.title};
`
export const Value = styled.td<TypeProp>`
  ${(props) => props.type === 'outcome' && `color: ${props.theme.red}`}

  ${(props) => props.type === 'income' && `color: ${props.theme.green}`}
`
export const Category = styled.td`
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`
export const DateT = styled.td`
  color: ${(props) => props.theme.text};
`
