import styled from 'styled-components'

export const StyledHome = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;

    @media (max-width: 1024px) {
      margin: 0 16px;
    }
  }
`
