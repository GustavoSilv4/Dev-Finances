import styled from 'styled-components'

interface ModalProps {
  show: boolean
}

export const Container = styled.div<ModalProps>`
  ${(props) => (props.show ? 'visibility: visible' : 'visibility: hidden')};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
`

export const Background = styled.div<ModalProps>`
  transform: translateY(-1000px);

  transition: all 0.8s;

  transform: ${(props) => props.show && 'translateY(0px)'};

  padding: 3rem;
  border-radius: 5px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > button {
    position: relative;
    margin-top: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: #c4c4c4;
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
`

export const ModalHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-weight: 500;
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
    gap: 1rem;

    > div {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
    }
  }

  label {
    margin: 0.5rem 0;
  }

  select {
    margin-bottom: 0.75rem;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
  }

  button {
    margin-top: 1rem;
    padding: 0.25rem 5rem;
    cursor: pointer;

    border: none;
    border-radius: 5px;

    &:hover {
      outline: 1px solid #101010;
    }
  }
`
