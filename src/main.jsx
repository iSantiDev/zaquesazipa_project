//#region imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Hero from './components/Hero/Hero.jsx'
import theme from '/src/theme/index.jsx'
//#endregion

Object.assign(document.getElementById('root').style, {
  maxWidth: '1440px',
  margin: '0 auto',
  overflow: 'hidden'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  </StrictMode>,
)
