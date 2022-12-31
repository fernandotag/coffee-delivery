import React, { forwardRef, InputHTMLAttributes, createRef } from 'react'
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
  ref: string
}

export const InputForm = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { textRight, gridColumn, gridRow, className, error, ...attr } = props

    return (
      <InputWrapper
        className={props.className}
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
