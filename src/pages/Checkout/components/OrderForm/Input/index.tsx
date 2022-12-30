import { InputHTMLAttributes } from 'react'
import { InputContainer, RightText, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  gridColumn: string
  gridRow: string
  textRight?: string
}

export function InputForm(props: InputProps) {
  const { textRight, gridColumn, gridRow, ...attr } = props
  return (
    <InputContainer gridColumn={gridColumn} gridRow={gridRow}>
      <StyledInput {...attr} />
      {textRight && <RightText>{textRight}</RightText>}
    </InputContainer>
  )
}
