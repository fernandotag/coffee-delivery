import { InputHTMLAttributes, forwardRef } from 'react'
import {
  InputContainer,
  InputError,
  InputWrapper,
  RightText,
  StyledInput,
} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  gridColumn: string
  gridRow: string
  textRight?: string
  className?: string
  error?: string
  mask?: string
}

export const InputForm = forwardRef<HTMLInputElement, InputProps>(
  (
    { textRight, gridColumn, gridRow, className, error, mask, ...attr },
    ref,
  ) => {
    return (
      <InputWrapper
        className={className}
        gridColumn={gridColumn}
        gridRow={gridRow}
      >
        <InputContainer>
          <StyledInput {...attr} ref={ref} />
          {textRight && <RightText>{textRight}</RightText>}
        </InputContainer>
        {error && <InputError>{error}</InputError>}
      </InputWrapper>
    )
  },
)
InputForm.displayName = 'InputForm'
