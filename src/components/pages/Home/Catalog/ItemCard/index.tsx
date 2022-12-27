import { ItemContainer } from './styles'
import coffee from '../assets/coffees/expresso-tradicional.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function ItemCard() {
  return (
    <ItemContainer>
      <img src={coffee} alt="Xícara com expresso tradicional" />
      <ul className="tags">
        <li>TRADICIONAL</li>
        <li>GELADO</li>
      </ul>
      <h2>Expresso Tradicional</h2>
      <div className="description">
        O tradicional café feito com água quente e grãos moídos
      </div>
      <div className="buy">
        <div className="price">
          <pre>R$ </pre>9,90
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
