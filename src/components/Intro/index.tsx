import { IntroContainer, StyledIcon, StyledItems } from './style'
import introCoffee from '../../assets/intro-coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <StyledItems>
          <li>
            <StyledIcon backgroundColor="yellowDark">
              <ShoppingCart weight="fill"></ShoppingCart>
            </StyledIcon>
            <span>Compra simples e segura</span>
          </li>
          <li>
            <StyledIcon backgroundColor="text">
              <Package weight="fill"></Package>
            </StyledIcon>
            Embalagem mantém o café intacto
          </li>
          <li>
            <StyledIcon backgroundColor="yellow">
              <Timer weight="fill"></Timer>
            </StyledIcon>
            Entrega rápida e rastreada
          </li>
          <li>
            <StyledIcon backgroundColor="purple">
              <Coffee weight="fill"></Coffee>
            </StyledIcon>
            O café chega fresquinho até você
          </li>
        </StyledItems>
      </div>
      <img src={introCoffee} alt="A thermo cup of coffee" />
    </IntroContainer>
  )
}