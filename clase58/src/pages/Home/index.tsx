import { useCallback, useEffect, useState } from "react"
import { Box, Dialog, DialogContent, Grid2, IconButton, Skeleton } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import PreviewIcon from '@mui/icons-material/Preview'
import CloseIcon from '@mui/icons-material/Close'

import { useDispatch, useSelector } from "react-redux"

import { IMovie } from "../../models/movie.model"
import { getMoviesAction } from "../../store/movies/slice"
import { RootState } from "../../store/config.store"

function Home() {
  const [openPreviewPoster, setOpenPreviewPoster] = useState(false)
  const [posterSelected, setPosterSelected] = useState('')
  const movies = useSelector((state: RootState) => state.movies)

  const dispatch = useDispatch()

  const handlePreviewPoster = useCallback((poster: string) => {
    setPosterSelected(poster)
    setOpenPreviewPoster(true)
  }, [])

  const handleClosePreviewPoster = useCallback(() => {
    setOpenPreviewPoster(false)
    setPosterSelected('')
  }, [])

  useEffect(() => {
    if (!movies.data) {
      dispatch(getMoviesAction())
    }
  }, [dispatch, movies.data])

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
      {movies.isLoading && <Grid2 display="flex" justifyContent="center" alignItems="center" size={{ xs: 12 }}>
        <Box sx={{ width: '100%' }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Grid2>}
      {movies.data && <DataGrid columns={columns} rows={movies.data} />}
    </Grid2>
  )
}

export default Home
