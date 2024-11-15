import { Grid2, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      <Grid2>
        <Typography variant="h1" align="center">404</Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography align="center">Page not found</Typography>
      </Grid2>
      <Grid2 size={12} display="flex" justifyContent="center">
        <Link to="/">Home</Link>
      </Grid2>
    </Grid2>
  )
}

export default NotFound
