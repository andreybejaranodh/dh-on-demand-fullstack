import { createRoot } from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import AuthProvider from './context/AuthContext.tsx'
import Home from './pages/Home/index.tsx'
import About from './pages/About/index.tsx'
import Login from './pages/Login/index.tsx'
import MovieDetail from './pages/MovieDetail/index.tsx'
import NotFound from './pages/404/index.tsx'

const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </AuthProvider>
  </ThemeProvider>
)
