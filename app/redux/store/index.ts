import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers'
import { rootSaga } from '../sagas'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['posts']
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]


export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch