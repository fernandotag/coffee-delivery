import { forwardRef, InputHTMLAttributes, ReactElement } from 'react'
import { ContentContainer, PaymentOptionContainer } from './styles'

interface PaymentOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactElement<any>
  label: string
}

export const PaymentOption = forwardRef<HTMLInputElement, PaymentOptionProps>(
  ({ icon, id, label, ...props }, ref) => {
    return (
      <PaymentOptionContainer>
        <input {...props} type="radio" name="paymentMethod" id={id} ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentOptionContainer>
    )
  },
)
PaymentOption.displayName = 'PaymentOption'
