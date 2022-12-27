import { ItemCard } from './ItemCard'
import { CatalogContainer, CatalogList } from './styles'

export function Catalog() {
  return (
    <CatalogContainer>
      <h1>Nossos cafés</h1>
      <CatalogList>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </CatalogList>
    </CatalogContainer>
  )
}
