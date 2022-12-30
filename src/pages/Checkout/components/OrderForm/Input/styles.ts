import styled from 'styled-components'

export const InputContainer = styled.div<{
  gridColumn: string
  gridRow: string
}>`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  display: flex;
  align-items: center;
  justify-content: end;
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.label};
  position: absolute;
`

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.button};
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  font: 0.875rem 'Roboto', sans-serif;
  color: ${(props) => props.theme.label};
  padding: 0.75rem;

  & ::placeholder {
    color: ${(props) => props.theme.label};
  }
`
