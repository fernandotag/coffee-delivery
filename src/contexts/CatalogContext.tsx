import { createContext, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CartContextProvider } from './CartContext'

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
    image: 'expresso-tradicional.svg',
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'expresso-americano.svg',
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'expresso-cremoso.svg',
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'expresso-gelado.svg',
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'cafe-com-leite.svg',
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'latte.svg',
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'capuccino.svg',
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'macchiato.svg',
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'mocaccino.svg',
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'chocolate-quente.svg',
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'cubano.svg',
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Chocolate Quente',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'havaiano.svg',
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'arabe.svg',
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'irlandes.svg',
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
