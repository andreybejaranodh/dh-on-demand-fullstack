import { put, takeLatest } from "redux-saga/effects"

import * as movieService from "../../services/movie"

import { IBaseResponse } from "../../models/common.model"
import { IMovie } from "../../models/movie.model"

import { getMoviesErrorAction, getMoviesSuccessAction } from "./slice"
import { GET_MOVIES } from "./types"


function* getMoviesSaga() {
  try {
    const response: IBaseResponse<IMovie[]> = yield movieService.getMovies()
    yield put(getMoviesSuccessAction(response.data))
  } catch (error: any) {
    yield put(getMoviesErrorAction(error.message))
  }
}

export function* watchGetMovies() {
  yield takeLatest(GET_MOVIES, getMoviesSaga)
}
