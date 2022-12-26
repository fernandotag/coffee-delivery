import styled from 'styled-components'
import introBackground from '../../../assets/intro-bg.svg'

export const StyledHome = styled.main`
  width: 100%;
  background-image: url(${introBackground});
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    max-width: 70rem;

    @media (max-width: 1024px) {
      margin: 0 16px;
      flex-direction: column;
    }
  }
`
