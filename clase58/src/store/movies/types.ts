import { IMovie } from "../../models/movie.model"

export type MovieState = {
  data: IMovie[] | undefined
  isLoading: boolean
  error: string | null
}

export const MOVIES = 'movies'
export type MOVIES = typeof MOVIES

export const GET_MOVIES = `${MOVIES}/getMoviesAction`
export type GET_MOVIES = typeof GET_MOVIES
