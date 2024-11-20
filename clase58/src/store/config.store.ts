import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit"

import { rootSaga } from "./rootSaga"
import { rootReducer } from "./rootReducer"

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  })
  sagaMiddleware.run(rootSaga)
  return store
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
