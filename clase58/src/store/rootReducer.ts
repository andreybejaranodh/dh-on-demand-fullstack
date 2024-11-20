import { type Action, combineReducers } from "@reduxjs/toolkit"

import moviesReducer from "./movies/slice"

const appReducer = combineReducers({
  movies: moviesReducer
})

export const rootReducer = (
  state: any,
  action: Action
): ReturnType<typeof appReducer> => {
  return appReducer(state, action)
}

export default rootReducer
