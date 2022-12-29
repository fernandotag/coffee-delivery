import { Catalog } from './Catalog'
import { Intro } from './Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Catalog />
    </HomeContainer>
  )
}
