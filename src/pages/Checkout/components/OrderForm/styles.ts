import styled from 'styled-components'

export const OrderFormContainer = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
`
export const ShippingSection = styled.section`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 2.5rem;
  font-family: 'Roboto', sans-serif;
`

export const PaymentSection = styled.section`
  background-color: ${(props) => props.theme.card};
`

export const ShippingForm = styled.div``

export const ShippingFormHeader = styled.div`
  display: grid;
  grid-template-columns: 1.375rem 1fr;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.yellowDark};
  }

  & > p {
    grid-column: 2;
  }

  & :last-child {
    font-size: 0.875rem;
  }
`
export const ShippingFormBody = styled.div`
  margin-top: 1rem;
  display: grid;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  position: relative;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }
`
