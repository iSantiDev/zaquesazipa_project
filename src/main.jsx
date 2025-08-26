//#region imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import Hero from './components/Hero/Hero.jsx'
import theme from '/src/assets/theme.js'
//#endregion

document.body.style.backgroundColor = theme.palette.background.main;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  </StrictMode>,
)
