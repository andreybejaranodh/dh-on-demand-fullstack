import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

function MovieDetail() {
  const params = useParams()
  return (
    <Grid2 container spacing={2}>
      <Typography variant="h1">Movie Detail: {params.id}</Typography>
    </Grid2>
  )
}

export default MovieDetail
