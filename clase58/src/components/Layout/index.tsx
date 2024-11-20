import { Container } from '@mui/material'

import Header from "../Header"
import Footer from "../Footer"

interface LayoutProps {
  children: React.ReactNode
}

function Layout(props: LayoutProps) {
  const pages = [
    {
      name: 'Sobre Nosotros',
      path: '/about'
    },
    {
      name: 'Login',
      path: '/login'
    }
  ]

  const handleCloseNavMenu = () => {
    console.log('Se cerro el menu')
  }

  const handleOpenNavMenu = () => {
    console.log('Se abrio el menu')
  }

  return (
    <>
      <Header pages={pages} onClose={handleCloseNavMenu} onOpen={handleOpenNavMenu} />
      <Container component="main" sx={{
        minHeight: 'calc(100vh - 70px)',
        paddingTop: '100px',
        paddingBottom: '16px'
      }}>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
