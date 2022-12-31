import styled from 'styled-components'

export const InputWrapper = styled.div<{
  gridColumn: string
  gridRow: string
}>`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  div {
    width: 100%;
  }
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

export const InputError = styled.div`
  width: 100%;
  color: red;
  font: 0.7rem 'Roboto', sans-serif;
  margin-top: 0.2rem;
`
