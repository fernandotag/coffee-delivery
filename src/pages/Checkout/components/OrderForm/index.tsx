import {
  OrderFormContainer,
  PaymentSection,
  ShippingForm,
  ShippingFormBody,
  ShippingFormHeader,
  ShippingSection,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { InputForm } from './InputForm'
import { useFormContext } from 'react-hook-form'
import { MaskedInput } from './MaskedInput'

interface FormStateError {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function OrderForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as FormStateError

  return (
    <OrderFormContainer>
      <h3>Complete seu pedido</h3>
      <ShippingSection>
        <ShippingForm>
          <ShippingFormHeader>
            <MapPinLine size={'1.375rem'}></MapPinLine>
            <p>Endereço de Entrega</p>
            <p>Informe o endeço onde deseja receber seu pedido</p>
          </ShippingFormHeader>
          <ShippingFormBody>
            <MaskedInput
              maskOptions={{
                mask: '00000-000',
              }}
              gridColumn="1/2"
              gridRow="1"
              placeholder="CEP"
              type="text"
              mask="99999-999"
              {...register('zipCode')}
              error={errors.zipCode?.message}
            />
            <InputForm
              gridColumn="1/4"
              gridRow="2"
              placeholder="Rua"
              type="text"
              {...register('street')}
              error={errors.street?.message}
            />
            <InputForm
              gridColumn="1"
              gridRow="3"
              placeholder="Número"
              type="text"
              {...register('number')}
              error={errors.number?.message}
            />
            <InputForm
              gridColumn="2/4"
              gridRow="3"
              placeholder="Complemento"
              type="text"
              {...register('complement')}
              textRight="Opcional"
              error={errors.number?.message}
            />
            <InputForm
              gridColumn="1"
              gridRow="4"
              placeholder="Bairro"
              type="text"
              {...register('district')}
            />
            <InputForm
              gridColumn="2"
              gridRow="4"
              placeholder="Cidade"
              type="text"
              {...register('city')}
            />
            <InputForm
              gridColumn="3"
              gridRow="4"
              placeholder="UF"
              type="text"
              {...register('state')}
            />
          </ShippingFormBody>
        </ShippingForm>
      </ShippingSection>
      <PaymentSection>fasd</PaymentSection>
    </OrderFormContainer>
  )
}
