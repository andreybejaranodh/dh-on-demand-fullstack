import { createRoot } from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import App from './App.tsx'
import './index.css'
import AuthProvider from './context/AuthContext.tsx'

const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true
  }
})

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline enableColorScheme />
      <App />
    </AuthProvider>
  </ThemeProvider>
)
