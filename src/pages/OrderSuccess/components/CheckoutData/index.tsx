import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { CheckoutDataContainer, StyledIcon, StyledItems } from './styles'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { paymentMethods } from '../../../Checkout/components/OrderForm/PaymentForm'
import { useNavigate } from 'react-router-dom'

export function CheckoutData() {
  const { checkout } = useContext(CartContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!checkout) navigate('/')
  }, [checkout, navigate])

  const selectedPaymentMethod = paymentMethods
    .filter((method) => checkout?.paymentMethod === method.key)
    .map((method) => method.label)

  return (
    <CheckoutDataContainer>
      <StyledItems>
        <li>
          <StyledIcon backgroundColor="purple">
            <MapPin weight="fill" size={'1rem'}></MapPin>
          </StyledIcon>
          <p>
            Entrega em{' '}
            <strong>{`${checkout?.street} - ${checkout?.number}`}</strong>{' '}
            <br />
            {`${checkout?.district} - ${checkout?.city}, ${checkout?.state}`}
          </p>
        </li>
        <li>
          <StyledIcon backgroundColor="yellow">
            <Clock weight="fill" size={'1rem'}></Clock>
          </StyledIcon>
          <p>
            Previsão de entrega <br />
            <strong>20 min - 30 min</strong>
          </p>
        </li>
        <li>
          <StyledIcon backgroundColor="yellowDark">
            <CurrencyDollar weight="fill" size={'1rem'}></CurrencyDollar>
          </StyledIcon>
          <p>
            Pagamento na entrega <br />
            <strong>{selectedPaymentMethod}</strong>
          </p>
        </li>
      </StyledItems>
    </CheckoutDataContainer>
  )
}
