import { OrderFormContainer, PaymentSection } from './styles'
import { useFormContext } from 'react-hook-form'
import { ShippingForm } from './ShippingForm'
import { PaymentForm } from './PaymentForm'

export function OrderForm() {
  return (
    <OrderFormContainer>
      <h3>Complete seu pedido</h3>
      <ShippingForm />
      <PaymentForm />
    </OrderFormContainer>
  )
}
