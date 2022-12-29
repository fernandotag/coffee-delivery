import { useContext } from 'react'
import { CartContext } from '../../../../ contexts/CartContext'
import { CatalogContext } from '../../../../ contexts/CatalogContext'
import { CartItem } from './components/CartItem'

import {
  CartContainer,
  CartList,
  ConfirmOrderButton,
  ItemsSection,
} from './styles'

export function Cart() {
  const { cart } = useContext(CartContext)
  const { items } = useContext(CatalogContext)

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>
      <ItemsSection>
        <CartList>
          {cart.map((cartItem) => {
            const item = items.find((item) => item.id === cartItem.productId)
            if (item) {
              return (
                <CartItem
                  key={cartItem.productId}
                  id={cartItem.productId}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  qty={cartItem.qty}
                />
              )
            } else {
              return <></>
            }
          })}
        </CartList>
      </ItemsSection>

      <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
    </CartContainer>
  )
}
