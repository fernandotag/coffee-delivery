import { ItemContainer } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

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
  const options = {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }
  const formatNumber = new Intl.NumberFormat('pt-BR', options)

  return (
    <ItemContainer>
      <img
        src={`src/components/pages/Home/Catalog/assets/coffees/${image}`}
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
          {formatNumber.format(price)}
        </div>
        <div className="actions">
          <Minus weight="bold"></Minus>
          <span>2</span>
          <Plus weight="bold"></Plus>
        </div>
        <button type="button" className="add-cart">
          <ShoppingCart size={'1.375rem'} weight="fill"></ShoppingCart>
        </button>
      </div>
    </ItemContainer>
  )
}
