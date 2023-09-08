import { createContext, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CartContextProvider } from './CartContext'

import { allCoffeeImages } from '../pages/Home/Catalog/assets/coffees'

export interface Product {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface ICatalogContextType {
  items: Product[]
}

interface CatalogContextProviderProps {
  children: ReactNode
}

const coffeeList = [
  {
    id: uuidv4(),
    image: allCoffeeImages.expressoTradicional,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.expressoAmericano,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.expressoCremoso,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.expressoGelado,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.cafeComLeite,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.latte,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.capuccino,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.macchiato,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.mocaccino,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.chocolateQuente,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Chocolate Quente',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.havaiano,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.arabe,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: allCoffeeImages.irlandes,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export const CatalogContext = createContext({} as ICatalogContextType)

export function CatalogContextProvider({
  children,
}: CatalogContextProviderProps) {
  return (
    <CatalogContext.Provider
      value={{
        items: coffeeList,
      }}
    >
      <CartContextProvider>{children}</CartContextProvider>
    </CatalogContext.Provider>
  )
}
