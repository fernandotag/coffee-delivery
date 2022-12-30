import styled from 'styled-components'

export const CartContainer = styled.div`
  div.emptyList {
    font: bold 0.875rem 'Roboto', sans-serif;
  }

  h3 {
    margin-bottom: 1rem;
  }
`

export const ItemsSection = styled.section`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const OrderSummary = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font: 0.875rem 'Roboto', sans-serif;
  line-height: 1.3;
  color: ${(props) => props.theme.text};

  .total {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme.subtitle};
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
  font: bold 0.875rem 'Roboto', sans-serif;
  line-height: 1.6;
  border: 0;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.yellowDark};
  }
`
