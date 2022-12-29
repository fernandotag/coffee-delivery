import styled from 'styled-components'

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex: 1;
`
export const ShippingSection = styled.section`
  background-color: ${(props) => props.theme.card};
`

export const PaymentSection = styled.section`
  background-color: ${(props) => props.theme.card};
`

export const ShippingForm = styled.div``
