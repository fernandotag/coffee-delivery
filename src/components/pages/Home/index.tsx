import { Catalog } from './Catalog'
import { Intro } from './Intro'
import { StyledHome } from './styles'

export function Home() {
  return (
    <StyledHome>
      <Intro />
      <Catalog />
    </StyledHome>
  )
}
