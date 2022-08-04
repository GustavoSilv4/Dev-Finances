import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 10rem;
  overflow: auto;

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
    padding: 1.25rem 2rem;
    background-color: #ffffff;
    padding: 1rem;
    margin-bottom: 1rem;

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
