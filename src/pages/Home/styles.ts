import styled from 'styled-components'

export const Container = styled.div``

export const HeaderBackground = styled.div`
  width: 100vw;
  height: 238px;

  background-color: ${(props) => props.theme['green-light']};
`

export const HeaderContent = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  display: flex;
  justify-content: space-between;

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
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-around;
  gap: 1rem;

  margin-top: -6.25rem;
  margin-bottom: 4rem;

  @media (max-width: 1280px) {
    width: 100vw;
    align-items: center;
    margin: -6.25rem 0rem 4rem;
  }

  @media (max-width: 1028px) {
    width: 100vw;
    align-items: center;
    flex-wrap: wrap;
  }
`
