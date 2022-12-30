import {
  OrderFormContainer,
  PaymentSection,
  ShippingForm,
  ShippingFormBody,
  ShippingFormHeader,
  ShippingSection,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { InputForm } from './Input'

export function OrderForm() {
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
            <InputForm gridColumn="1/2" gridRow="1" placeholder="CEP" />
            <InputForm gridColumn="1/4" gridRow="2" placeholder="Rua" />
            <InputForm gridColumn="1" gridRow="3" placeholder="Número" />
            <InputForm
              gridColumn="2/4"
              gridRow="3"
              placeholder="Complemento"
              textRight="Opcional"
            />
            <InputForm gridColumn="1" gridRow="4" placeholder="Bairro" />
            <InputForm gridColumn="2" gridRow="4" placeholder="Cidade" />
            <InputForm gridColumn="3" gridRow="4" placeholder="UF" />
          </ShippingFormBody>
        </ShippingForm>
      </ShippingSection>
      <PaymentSection>fasd</PaymentSection>
    </OrderFormContainer>
  )
}
