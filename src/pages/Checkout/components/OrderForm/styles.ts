import styled from 'styled-components'

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    margin-bottom: 0.25rem;
  }
`

export const PaymentSection = styled.section`
  background-color: ${(props) => props.theme.card};
`
