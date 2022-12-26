import { HeaderContainer } from './style'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffeeDelivery} alt="" />
      </span>
      <nav>
        <span>
          <MapPin weight="fill" size={22} /> Porto Alegre, RS
        </span>
        <span>
          <ShoppingCart weight="fill" size={22} />
          <span className="counter">3</span>
        </span>
      </nav>
    </HeaderContainer>
  )
}
