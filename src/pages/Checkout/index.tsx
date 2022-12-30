import { Cart } from './components/Cart'
import { OrderForm } from './components/OrderForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderForm />
      <Cart />
    </CheckoutContainer>
  )
}
