import { ItemContainer } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../util/format'

interface ItemCardProps {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}
export function ItemCard({
  id,
  description,
  name,
  price,
  image,
  tags,
}: ItemCardProps) {
  const [qty, setQty] = useState(0)

  const { addItemToCart } = useContext(CartContext)

  const handleAddItem = () => {
    const numberSet = qty + 1
    setQty(numberSet)
  }

  const handleRemoveItem = () => {
    if (qty > 0) {
      const numberSet = qty - 1
      setQty(numberSet)
    }
  }

  const handleAddItemToCart = () => {
    if (qty > 0) {
      addItemToCart(id, qty)
    }
    setQty(0)
  }

  return (
    <ItemContainer>
      <img
        src={`src/pages/Home/Catalog/assets/coffees/${image}`}
        alt={`Xícara com ${name}`}
      />
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <h2>{name}</h2>
      <div className="description">{description}</div>
      <div className="buy">
        <div className="price">
          <pre>R$ </pre>
          {formatPrice(price)}
        </div>
        <div className="actions">
          <Minus weight="bold" onClick={handleRemoveItem}></Minus>
          <span>{qty}</span>
          <Plus weight="bold" onClick={handleAddItem}></Plus>
        </div>
        <button
          type="button"
          className="add-cart"
          onClick={handleAddItemToCart}
          disabled={qty === 0}
        >
          <ShoppingCart size={'1.375rem'} weight="fill"></ShoppingCart>
        </button>
      </div>
    </ItemContainer>
  )
}
