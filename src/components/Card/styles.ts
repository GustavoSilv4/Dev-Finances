import styled from 'styled-components'

interface TypeProps {
  typeCard: 'entrada' | 'saida' | 'total'
}

export const Container = styled.button<TypeProps>`
  width: 22rem;
  max-height: 8.5rem;
  padding: 1.5rem 2rem 1.125rem;
  position: relative;
  top: 0;

  cursor: pointer;
  border: none;
  border-radius: 5px;

  background-color: ${(props) => (props.typeCard === 'total' ? props.theme.green : '#FFFFFF')};

  transition: top 0.2s;

  &:hover {
    top: -5px;
  }

  span {
    color: ${(props) => (props.typeCard === 'total' ? '#FFFFFF' : props.theme.title)};
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
      ${(props) => props.typeCard === 'entrada' && `color: ${props.theme.green}`}
    }
  }
`
