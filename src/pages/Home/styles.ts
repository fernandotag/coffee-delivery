import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;

    @media (max-width: 1024px) {
      padding: 0 1rem;
    }
  }
`
