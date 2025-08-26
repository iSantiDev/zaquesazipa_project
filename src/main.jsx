//#region imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import Hero from './components/Hero/Hero.jsx'
import theme from '/src/assets/theme.js'
//#endregion

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider bgcolor="mode.dark" theme={theme}>
      <Hero />
    </ThemeProvider>
  </StrictMode>,
)
