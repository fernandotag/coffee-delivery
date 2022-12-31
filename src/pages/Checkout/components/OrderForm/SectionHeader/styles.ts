import styled from 'styled-components'

export const SectionHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1.375rem 1fr;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.yellowDark};
  }

  & > p {
    grid-column: 2;
  }

  & :last-child {
    font-size: 0.875rem;
  }
`
