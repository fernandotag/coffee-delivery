import styled from 'styled-components'

export const PaymentOptionContainer = styled.div`
  input {
    position: absolute;
    visibility: hidden;
    appearance: none;
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: solid 1px ${({ theme }) => theme.button};
  user-select: none;
  &:hover {
    transition: 0.4s;
    background: ${({ theme }) => theme.hover};
  }
  svg {
    color: ${({ theme }) => theme.purple};
  }
`
