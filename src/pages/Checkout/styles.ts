import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;
  justify-content: center;

  h3 {
    font-size: 1.125rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`
