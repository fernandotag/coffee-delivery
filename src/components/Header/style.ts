import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  height: 2.5rem;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    span {
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      position: relative;
      cursor: pointer;
    }

    span:first-child {
      width: 8.94rem;
      background: ${(props) => props.theme.purpleLight};
      color: ${(props) => props.theme.purpleDark};
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 1.5;
      gap: 0.25rem;

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }

  span:last-child {
    background: ${(props) => props.theme.yellowLight};

    svg {
      color: ${(props) => props.theme.yellowDark};
    }

    .counter,
    .counter:hover {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      background: ${(props) => props.theme.yellowDark};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      color: ${(props) => props.theme.white};
      font-size: 0.75rem;
    }
  }

  span:last-child:hover {
    background: ${(props) => props.theme.yellow};
  }
`
