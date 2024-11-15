
import { useCallback, useEffect, useState } from "react"
import { Dialog, DialogContent, Grid2, IconButton } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import PreviewIcon from '@mui/icons-material/Preview'
import CloseIcon from '@mui/icons-material/Close'

import { IMovie } from "../../models/movie.model"
import * as movieService from '../../services/movie'

function Home() {
  const [openPreviewPoster, setOpenPreviewPoster] = useState(false)
  const [posterSelected, setPosterSelected] = useState('')
  const [movies, setMovies] = useState<IMovie[] | undefined>()

  const handlePreviewPoster = useCallback((poster: string) => {
    setPosterSelected(poster)
    setOpenPreviewPoster(true)
  }, [])

  const handleClosePreviewPoster = useCallback(() => {
    setOpenPreviewPoster(false)
    setPosterSelected('')
  }, [])

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await movieService.getMovies()
        setMovies(response.data)
      } catch (error: any) {
        console.log(error)
      }
    }
    getMovies()
  }, [])

  const columns: GridColDef<IMovie>[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      type: 'number'
    },
    {
      field: 'title',
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
