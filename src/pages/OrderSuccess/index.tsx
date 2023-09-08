import { CheckoutData } from './components/CheckoutData'
import { SuccessContainer } from './styles'
import delivery from '../../assets/delivery.svg'

export function OrderSuccess() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p id="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <CheckoutData />
      </div>

      <img src={delivery} alt="" />
    </SuccessContainer>
  )
}
