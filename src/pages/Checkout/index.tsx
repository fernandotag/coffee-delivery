import { Cart } from './Cart'
import { OrderForm } from './OrderForm'
import { CheckoutContainer, OrderContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <OrderForm />
        <Cart />
      </OrderContainer>
    </CheckoutContainer>
  )
}
