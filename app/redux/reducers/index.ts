import { combineReducers, createStore } from 'redux';
import authReducer from './auth';
import { UserState } from './auth';

export default interface RootState {
    auth: UserState
}

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = createStore(rootReducer);


