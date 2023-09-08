import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'

export const CheckoutDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 2.5rem;
  gap: 2rem;
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.375rem 2.25rem;
  color: #8047f8;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: 0.375rem 2.25rem;
    background-image: linear-gradient(45deg, #dbac2c, #8047f8);
  }
`

export const StyledItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 100%;
    font: 1rem 'Roboto', sans-serif;
    color: ${(props) => props.theme.text};
    gap: 0.75rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    @media (max-width: 1024px) {
      width: 100%;
    }
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
