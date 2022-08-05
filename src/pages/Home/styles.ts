import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  width: 100%;
  height: 14.8rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 10rem 0;

  background-color: ${(props) => props.theme['green-light']};

  img {
    width: auto;
    height: 1.5rem;
  }

  nav {
    display: flex;
    gap: 1.5rem;

    button {
      position: relative;
      font-size: 1rem;
      font-weight: 400;
      color: #ffffff;
      border: none;
      background-color: transparent;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: ${(props) => props.theme.green};
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }

      :hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`

export const CardSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;

  margin: -6.25rem 10rem 4rem;
`
