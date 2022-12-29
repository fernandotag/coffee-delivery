import { HeaderContainer } from './style'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../ contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const [totaItemsCart, setTotaItemsCart] = useState(0)

  useEffect(() => {
    const totaItems = cart
      .map((cart) => cart.qty)
      .reduce((total, currentValue) => total + currentValue, 0)
    setTotaItemsCart(totaItems)
    console.log(cart)
  }, [cart])

  return (
    <HeaderContainer>
      <span>
        <NavLink to={'/'}>
          {' '}
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
      </span>
      <nav>
        <span>
          <MapPin weight="fill" size={22} /> Porto Alegre, RS
        </span>
        <NavLink to={'/checkout'}>
          <span>
            <ShoppingCart weight="fill" size={22} />
            <span className="counter">{totaItemsCart}</span>
          </span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
