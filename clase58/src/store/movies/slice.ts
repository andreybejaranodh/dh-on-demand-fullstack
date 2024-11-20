import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import { IMovie } from '../../models/movie.model'

import { MOVIES, MovieState } from './types'

const initalState: MovieState = {
  data: undefined,
  isLoading: false,
  error: null
}

export const moviesSlice = createSlice({
  name: MOVIES,
  initialState: initalState,
  reducers: {
    getMoviesAction: (state: MovieState) => {
      state.isLoading = true
    },
    getMoviesSuccessAction: (state: MovieState, {payload}: PayloadAction<IMovie[]>) => {
      state.isLoading = false
      state.data = payload
    },
    getMoviesErrorAction: (state: MovieState, {payload}: PayloadAction<string>) => {
      state.isLoading = false
      state.error = payload
    }
  }
})

export const { getMoviesAction, getMoviesSuccessAction, getMoviesErrorAction } = moviesSlice.actions

export default moviesSlice.reducer
