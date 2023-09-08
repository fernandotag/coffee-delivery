import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { InputError } from '../InputForm/styles'
import { PaymentOption } from '../PaymentOption'
import { SectionHeader } from '../SectionHeader'
import { PaymantFormContainer, PaymentOptionsContainer } from './styles'

export const paymentMethods = [
  {
    key: 'credit',
    label: 'Cartão de Crédito',
    icon: <CreditCard size={'1rem'} />,
  },
  {
    key: 'debit',
    label: 'Cartão de Débito',
    icon: <Bank size={'1rem'} />,
  },
  {
    key: 'money',
    label: 'Dinheiro',
    icon: <Money size={'1rem'} />,
  },
]

export function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodsError = errors?.paymentMethod
    ?.message as unknown as string

  return (
    <PaymantFormContainer>
      <SectionHeader
        icon={<CurrencyDollar size={'1.375rem'}></CurrencyDollar>}
        title={'Pagamento'}
        subtitle={
          'O pagamento é feito na entrega. Escolha a forma que desejar pagar'
        }
      />
      <PaymentOptionsContainer>
        {paymentMethods.map(({ icon, label, key }) => (
          <PaymentOption
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </PaymentOptionsContainer>
      {paymentMethodsError && <InputError>{paymentMethodsError}</InputError>}
    </PaymantFormContainer>
  )
}
