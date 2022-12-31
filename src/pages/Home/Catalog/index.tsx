import { useContext } from 'react'
import { CatalogContext } from '../../../contexts/CatalogContext'
import { ItemCard } from './ItemCard'
import { CatalogContainer, CatalogList } from './styles'

export function Catalog() {
  const { items } = useContext(CatalogContext)

  return (
    <CatalogContainer>
      <h1>Nossos cafés</h1>
      <CatalogList>
        {items.map((item) => {
          return <ItemCard key={item.id} {...item}></ItemCard>
        })}
      </CatalogList>
    </CatalogContainer>
  )
}
