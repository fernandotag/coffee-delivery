import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { InputError } from '../InputForm/styles'
import { PaymentOption } from '../PaymentOption'
import { SectionHeader } from '../SectionHeader'
import { PaymantFormContainer, PaymentOptionsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Credit Card',
    icon: <CreditCard size={'1rem'} />,
  },
  debit: {
    label: 'Debit Card',
    icon: <Bank size={'1rem'} />,
  },
  money: {
    label: 'Money',
    icon: <Money size={'1rem'} />,
  },
}

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
          'O pagamento é feito na entega. Escolha a forma que desejar pagar'
        }
      />
      <PaymentOptionsContainer>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
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
