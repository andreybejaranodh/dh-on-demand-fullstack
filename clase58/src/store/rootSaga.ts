import {all, fork} from 'redux-saga/effects'

import { watchGetMovies } from './movies/saga'

export function* rootSaga() {
  yield all([
    fork(watchGetMovies)
  ])
}

export default rootSaga
