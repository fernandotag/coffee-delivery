import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { InputForm } from '../InputForm'
import { MaskedInput } from '../MaskedInput'
import { SectionHeader } from '../SectionHeader'
import { ShippingFormBody, ShippingSection } from './styles'

interface FormStateError {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function ShippingForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as FormStateError

  return (
    <ShippingSection>
      <SectionHeader
        icon={<MapPinLine size={'1.375rem'}></MapPinLine>}
        title={'Endereço de Entrega'}
        subtitle={'Informe o endeço onde deseja receber seu pedido'}
      />
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
          error={errors.complement?.message}
        />
        <InputForm
          gridColumn="1"
          gridRow="4"
          placeholder="Bairro"
          type="text"
          {...register('district')}
          error={errors.district?.message}
        />
        <InputForm
          gridColumn="2"
          gridRow="4"
          placeholder="Cidade"
          type="text"
          {...register('city')}
          error={errors.city?.message}
        />
        <InputForm
          gridColumn="3"
          gridRow="4"
          placeholder="UF"
          type="text"
          {...register('state')}
          error={errors.state?.message}
        />
      </ShippingFormBody>
    </ShippingSection>
  )
}
