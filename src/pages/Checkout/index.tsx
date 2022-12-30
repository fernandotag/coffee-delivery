import { Cart } from './components/Cart'
import { OrderForm } from './components/OrderForm'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'

enum PaymentMethod {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutFormValidatorSchema = zod.object({
  zipCode: zod.string().min(1, 'Zip-code is required. Please type this field'),
  street: zod.string().min(1, 'Fill this field'),
  number: zod.string().min(1, 'Fill this field'),
  complement: zod.string().nullable(),
  district: zod.string().min(1, 'Fill this field'),
  city: zod.string().min(1, 'Fill this field'),
  uf: zod.string().min(1, 'Fill this field'),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: 'Select a paymentMethods' }
    },
  }),
})

type OrderData = zod.infer<typeof checkoutFormValidatorSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderForm />
      <Cart />
    </CheckoutContainer>
  )
}
