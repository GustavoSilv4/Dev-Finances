import styled from 'styled-components'

interface TypeProps {
  typeCard: 'entrada' | 'saida' | 'total'
}

export const Container = styled.a<TypeProps>`
  width: 20rem;
  max-width: 22rem;
  max-height: 8.5rem;
  padding: 1.5rem 2rem 1.125rem;

  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.55);

  background-color: ${(props) =>
    props.typeCard === 'total' ? props.theme.green : '#FFFFFF'};

  span {
    color: ${(props) =>
      props.typeCard === 'total' ? '#FFFFFF' : props.theme.title};
    font-size: 2.25rem;
    font-weight: 600;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      font-size: 1rem;
      font-weight: 400;
    }

    > svg {
      ${(props) => props.typeCard === 'total' && 'color: #FFFFFF'}
      ${(props) => props.typeCard === 'saida' && `color: ${props.theme.red}`}
      ${(props) =>
        props.typeCard === 'entrada' && `color: ${props.theme.green}`}
    }
  }
`
