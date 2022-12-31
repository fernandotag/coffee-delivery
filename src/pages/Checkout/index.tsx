import { Cart } from './components/Cart'
import { OrderForm } from './components/OrderForm'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

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
  city: zod.string().min(10, 'Fill this field'),
  uf: zod.string().min(1, 'Fill this field'),
})

type OrderData = zod.infer<typeof checkoutFormValidatorSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const checkoutForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(checkoutFormValidatorSchema),
  })

  const { handleSubmit, reset } = checkoutForm
  console.log(checkoutForm.formState.errors)
  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <OrderForm />
        <Cart />
      </CheckoutContainer>
    </FormProvider>
  )
}
