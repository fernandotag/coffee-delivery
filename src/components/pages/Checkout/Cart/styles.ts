import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 28rem;
  flex: 1;
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

export const ConfirmOrderButton = styled.button``
