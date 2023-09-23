import { all, fork } from 'redux-saga/effects'
import { watch as userWatch } from './users'

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(userWatch)]);
}
