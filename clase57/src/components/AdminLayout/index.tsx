import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default AdminLayout
