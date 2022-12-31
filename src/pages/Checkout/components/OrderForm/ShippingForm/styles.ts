import styled from 'styled-components'

export const ShippingSection = styled.section`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 2.5rem;
  font-family: 'Roboto', sans-serif;
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
