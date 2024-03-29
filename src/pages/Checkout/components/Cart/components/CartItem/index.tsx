import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'
import { formatPriceWithCurrecy } from '../../../../../../util/format'
import { ActionsContainer, CartItemContainer, CounterContainer } from './styles'

interface CardItemProps {
  id: string
  name: string
  qty: number
  price: number
  image: string
}

export function CartItem(props: CardItemProps) {
  const { id, name, price, qty, image } = props

  const { addItemToCart, removeItemFromCart } = useContext(CartContext)

  const handleAddItemToCart = () => {
    addItemToCart(id, 1)
  }

  const handleRemoveItemToCart = () => {
    removeItemFromCart(id, 1)
  }

  const handleRemoveAllItemToCart = () => {
    removeItemFromCart(id, qty)
  }

  return (
    <CartItemContainer>
      <img src={image} alt={`Xícara com ${image}`} />
      <ActionsContainer>
        <div className="name">{name}</div>
        <CounterContainer>
          <button className="remove" type="button">
            <Minus weight="bold" onClick={handleRemoveItemToCart}></Minus>
          </button>
          <div className="counter">{qty}</div>
          <button className="add" type="button">
            <Plus weight="bold" onClick={handleAddItemToCart}></Plus>
          </button>
          <button
            type="button"
            className="removeAll"
            onClick={handleRemoveAllItemToCart}
          >
            <Trash size={'1.375rem'} /> Remover
          </button>
        </CounterContainer>
      </ActionsContainer>
      <div className="price">{formatPriceWithCurrecy(qty * price)}</div>
    </CartItemContainer>
  )
}
