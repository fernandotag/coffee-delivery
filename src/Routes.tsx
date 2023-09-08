import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OrderSuccess } from './pages/OrderSuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Route>
    </Routes>
  )
}
