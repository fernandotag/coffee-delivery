import styled from 'styled-components'

export const CartItemContainer = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.button};
  padding-bottom: 1.5rem;
  display: flex;
  gap: 1.25rem;
  font-family: 'Roboto', sans-serif;

  img {
    width: 4rem;
  }

  & ~ li {
    padding-top: 1.5rem;
  }

  .name {
    color: ${(props) => props.theme.subtitle};
  }

  .price {
    flex: 1;
    text-align: right;
    line-height: 1.3;
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  border-radius: 6px;
  line-height: 1.3;
  font: 1rem 'Roboto', sans-serif;

  button {
    border: 0;
    background: ${(props) => props.theme.button};
    cursor: pointer;
    display: flex;
    padding: 0 0.25rem;
    height: 2rem;
    align-items: center;
    font-family: 'Roboto', sans-serif;
  }

  button.removeAll {
    margin-left: 0.5rem;
    background: ${(props) => props.theme.button};
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 0.6;
    padding: 0.4rem 0.5rem;
    color: ${(props) => props.theme.text};

    svg {
      margin-right: 0.25rem;
    }
  }

  button.remove {
    border-radius: 6px 0 0 6px;
    padding-left: 0.5rem;
  }

  button.add {
    border-radius: 0 6px 6px 0;
    padding-right: 0.5rem;
  }

  .counter {
    background: ${(props) => props.theme.button};
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0 0.25rem;
    color: ${(props) => props.theme.title};
  }

  svg {
    color: ${(props) => props.theme.purple};
    width: 0.875rem;
  }
`

export const ButtonConfirmOrder = styled.button`
  flex: 0;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.purpleDark};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
