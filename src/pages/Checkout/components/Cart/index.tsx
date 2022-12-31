import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CatalogContext } from '../../../../contexts/CatalogContext'
import { formatPriceWithCurrecy } from '../../../../util/format'
import { CartItem } from './components/CartItem'

import {
  ButtonConfirmOrder,
  CartContainer,
  CartList,
  ItemsSection,
  OrderSummary,
} from './styles'

export function Cart() {
  const { cart, totalPriceItems } = useContext(CartContext)
  const { items } = useContext(CatalogContext)

  const totalSeletecItems = cart.length
  const totalItems = totalPriceItems()
  const shippingValue = 3.5
  const totalOrderPrice = totalItems + shippingValue

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>
      <ItemsSection>
        <CartList>
          {cart.length > 0 ? (
            cart.map((cartItem) => {
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
              }
              return <></>
            })
          ) : (
            <div className="emptyList">Nenhum item selecionado</div>
          )}
        </CartList>
        <OrderSummary>
          <div>
            <span>Total de itens</span>
            <span>{formatPriceWithCurrecy(totalItems)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{formatPriceWithCurrecy(shippingValue)}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{formatPriceWithCurrecy(totalOrderPrice)}</span>
          </div>
        </OrderSummary>

        <ButtonConfirmOrder type="submit">confirmar pedido</ButtonConfirmOrder>
      </ItemsSection>
    </CartContainer>
  )
}
