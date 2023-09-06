import { createContext, ReactNode, useContext, useState } from 'react'
import { CatalogContext } from './CatalogContext'

interface Product {
  productId: string
  qty: number
}

interface Cart extends Array<Product> {}

interface Checkout {
  zipCode: string
  street: string
  number: string
  complement: string | null
  district: string
  city: string
  state: string
  paymentMethod: string
}

interface ICartContextType {
  cart: Cart
  checkout?: Checkout
  addItemToCart: (productId: string, qty: number) => void
  removeItemFromCart: (productId: string, qty: number) => void
  totalPriceItems: () => number
  confirmOrder: (checkout: Checkout) => void
}

export const CartContext = createContext({} as ICartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { items } = useContext(CatalogContext)

  const [cart, setCart] = useState<Cart>([])
  const [checkout, setCheckout] = useState<Checkout>()

  function isItemInTheCart(productId: string): boolean {
    return !!cart.find((item) => item.productId === productId)
  }

  const addItemToCart = (productId: string, qty: number) => {
    if (isItemInTheCart(productId)) {
      const newCart = cart.map((item: Product) => {
        if (item.productId === productId) {
          item.qty += qty
        }
        return item
      })
      setCart(newCart)
    } else {
      const newCart = [...cart, { productId, qty }]
      setCart(newCart)
    }
  }

  const removeItemFromCart = (productId: string, qty: number) => {
    if (isItemInTheCart(productId)) {
      const newCart = cart
        .map((item: Product) => {
          if (item.productId === productId) {
            item.qty -= qty
          }
          return item
        })
        .filter((item) => item.qty > 0)
      setCart(newCart)
    }
  }

  const totalPriceItems = () => {
    return cart
      .map((item) => {
        const productId = item.productId
        const product = items.find((product) => product.id === productId)
        return product ? item.qty * product?.price : 0
      })
      .reduce((total, currenteValue) => total + currenteValue, 0)
  }

  const confirmOrder = (checkout: Checkout) => {
    setCheckout(checkout)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        checkout,
        addItemToCart,
        removeItemFromCart,
        totalPriceItems,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
