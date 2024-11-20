import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

interface CardMovieProps {
  movie: {
    id: number
    name: string
    genre: string
    year: number
    poster: string
    description: string
  }
}

function CardMovie(props: CardMovieProps) {
  return (
    <Card sx={{ borderRadius: 2, '&:hover': { transform: 'scale(1.01)', transition: 'transform 300ms ease' } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={300}
          image={props.movie.poster}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardMovie
