import styled from 'styled-components'

export const CatalogContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 70rem;
  color: ${(props) => props.theme.subtitle};
  margin-top: 2rem;
  margin-bottom: 9rem;
`

export const CatalogList = styled.ul`
  list-style: none;
  margin-top: 3.375rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`
