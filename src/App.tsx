import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { CatalogContextProvider } from './contexts/CatalogContext'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={window.location.pathname || ''}>
        <CatalogContextProvider>
          <Router />
        </CatalogContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
