import { combineReducers } from 'redux'
import userReducer, { UserState } from './users'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

export interface RootState {
  users: UserState;
}


export const rootReducer = combineReducers({
  users: userReducer,
})
