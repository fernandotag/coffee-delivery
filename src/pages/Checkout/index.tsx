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
  zipCode: zod.string().min(8, 'Zip-code is required. Please type this field'),
  street: zod.string().min(1, 'Street is required. Fill this field'),
  number: zod.string().min(1, 'Number is required. Fill this field'),
  complement: zod.string().nullable(),
  district: zod.string().min(1, 'District is required. Fill this field'),
  city: zod.string().min(1, 'City is required. Fill this field'),
  state: zod.string().min(1, 'State is required. Fill this field'),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: 'Select a paymentMethods' }
    },
  }),
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
