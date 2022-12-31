import styled from 'styled-components'

export const PaymantFormContainer = styled.section`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 2.5rem;
  font-family: 'Roboto', sans-serif;
`
export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
