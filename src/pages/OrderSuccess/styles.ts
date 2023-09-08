import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 40rem 28rem;
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
`
