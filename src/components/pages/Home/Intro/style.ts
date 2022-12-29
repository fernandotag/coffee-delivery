import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'
import introBackground from '../assets/intro-bg.svg'

export const IntroContainer = styled.div`
  background-image: url(${introBackground});
  display: flex;
  justify-content: center;

  & > div {
    max-width: 70rem;
    display: flex;
    gap: 3.5rem;
    padding: 5.875rem 0 6.75rem;
    justify-content: center;

    @media (max-width: 1024px) {
      text-align: center;
      flex-direction: column;
    }
  }

  h1 {
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme.title};
  }

  h3 {
    font: 1.25rem 'Roboto', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme.subtitle};
    margin-top: 1rem;
  }

  img {
    width: 100%;
    max-width: 29.75rem;
  }
`

export const StyledItems = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 4.125rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  li {
    font: 1rem 'Roboto', sans-serif;
    width: 50%;
    height: 2rem;
    color: ${(props) => props.theme.text};
    line-height: 1.3;
    gap: 0.75rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1024px) {
      width: auto;
    }
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
    color: ${(props) => props.theme.white};
  }
`
