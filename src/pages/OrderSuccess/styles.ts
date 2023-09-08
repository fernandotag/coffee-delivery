import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: end;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.yellowDark};
  }

  p {
    font: 1.25rem 'Roboto', sans-serif;
  }

  #subtitle {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  img {
    width: 100%;
  }
`
