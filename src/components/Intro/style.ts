import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const IntroContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.875rem 0 6.75rem;

  h1 {
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme.title};
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.subtitle};
    margin-top: 1rem;
  }

  img {
    width: 29.75rem;
  }
`

export const StyledItems = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 4.125rem;
  flex-wrap: wrap;

  li {
    font-family: 'Roboto', sans-serif;
    width: 50%;
    height: 2rem;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
    line-height: 1.3;
    gap: 0.75rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  li:not(:last-of-type) {
    margin-bottom: 1.25rem;
  }
`

interface StyledIconProps {
  backgroundColor: string
}

export const StyledIcon = styled.span<StyledIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => {
    return props.theme[props.backgroundColor as keyof typeof defaultTheme]
  }};
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  svg {
    width: 1rem;
    color: ${(props) => props.theme.white};
  }
`
