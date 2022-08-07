import styled from 'styled-components'

interface ModalProps {
  show: boolean
}

interface ButtonProps {
  typeButtonProps: 'income' | 'outcome' | null
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

  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const ModalHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-weight: 400;
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;

    ::placeholder {
      color: ${(props) => props.theme.text};
    }
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  label {
    margin: 0.5rem 0;
  }

  select {
    width: 100%;
    font-size: 1rem;

    margin-bottom: 1rem;
    padding: 0.875rem 1rem;

    border: none;
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 5px;

    background-color: #ffffff;
  }

  > button {
    width: 100%;
    padding: 0.75rem 0;
    cursor: pointer;

    color: #ffffff;
    background: ${(props) => props.theme.green};

    border: none;
    border-radius: 5px;

    &:hover {
      background-color: rgba(73, 170, 38, 90%);
    }
  }
`

const ButtonTypeBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  width: 100%;
  padding: 0.75rem 0;
  margin-bottom: 1rem;

  background-color: transparent;
  color: ${(props) => props.theme.title};

  border: none;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 5px;
`

export const ButtonIncome = styled(ButtonTypeBase)<ButtonProps>`
  svg {
    color: ${(props) => props.theme.green};
  }

  ${(props) => props.typeButtonProps === 'income' && `background-color: rgba(73, 170, 38, 20%);`}
  ${(props) => props.typeButtonProps === 'income' && `border: 1px solid rgba(73, 170, 38, 20%);`}
`

export const ButtonOutcome = styled(ButtonTypeBase)<ButtonProps>`
  svg {
    color: ${(props) => props.theme.red};
  }

  ${(props) => props.typeButtonProps === 'outcome' && `background-color: rgba(233, 41, 41, 20%);`}
  ${(props) => props.typeButtonProps === 'outcome' && `border: 1px solid rgba(233, 41, 41, 20%);`}
`

export const ButtonClose = styled.button`
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
`
