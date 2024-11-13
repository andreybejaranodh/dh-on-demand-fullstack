/* eslint-disable max-len */
import { useCallback, useState } from "react"
import { Dialog, DialogContent, Grid2, IconButton } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import PreviewIcon from '@mui/icons-material/Preview'
import CloseIcon from '@mui/icons-material/Close'

const movies = [
  {
    id: 1,
    name: 'The Matrix',
    genre: 'Action',
    year: 1999,
    poster: 'https://es.web.img3.acsta.net/medias/nmedia/18/72/16/76/20065616.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
  },
  {
    id: 2,
    name: 'The Matrix Reloaded',
    genre: 'Action',
    year: 2003,
    poster: 'https://m.media-amazon.com/images/M/MV5BNjAxYjkxNjktYTU0YS00NjFhLWIyMDEtMzEzMTJjMzRkMzQ1XkEyXkFqcGc@._V1_.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
  },
  {
    id: 3,
    name: 'The Matrix Revolutions',
    genre: 'Action',
    year: 2003,
    poster: 'https://es.web.img2.acsta.net/medias/nmedia/18/78/91/51/20076377.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
  }
]

function Home() {
  const [openPreviewPoster, setOpenPreviewPoster] = useState(false)
  const [posterSelected, setPosterSelected] = useState('')

  const handlePreviewPoster = useCallback((poster: string) => {
    setPosterSelected(poster)
    setOpenPreviewPoster(true)
  }, [])

  const handleClosePreviewPoster = useCallback(() => {
    setOpenPreviewPoster(false)
    setPosterSelected('')
  }, [])

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200
    },
    {
      field: 'genre',
      headerName: 'Genre',
    },
    {
      field: 'year',
      headerName: 'Year',
    },
    {
      field: 'poster',
      headerName: 'Poster',
      align: 'center',
      renderCell: (params) => {
        return (
          <IconButton onClick={() => handlePreviewPoster(params.row.poster)}>
            <PreviewIcon />
          </IconButton>
        )
      }
    },
    {
      field: 'description',
      headerName: 'Description',
    }
  ]

  return (
    <Grid2 container spacing={2}>
      <Dialog open={openPreviewPoster} onClose={handleClosePreviewPoster}>
        <IconButton
          aria-label="close"
          onClick={handleClosePreviewPoster}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ pt: 8 }}>
          <img src={posterSelected} alt="Poster" height={300} />
        </DialogContent>
      </Dialog>
      <DataGrid columns={columns} rows={movies} />
    </Grid2>
  )
}

export default Home
