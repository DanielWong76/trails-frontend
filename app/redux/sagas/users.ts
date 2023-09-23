import { call, put, select, takeLatest } from 'redux-saga/effects'
// import {
//   getProfileRequest, getUsersRequest
// } from '../../service/api/users'
import {
  GET_PROFILE,
  GET_USERS,
  SET_SESSION_TOKEN,
} from '../actions/constants'
import {
  getProfileAction,
  getProfileFailAction,
  getProfileSuccessAction,
  getUsersFailAction,
  getUsersSuccessAction,
} from '../actions/users'
import User from '../../models/user'
import { selectProfile, selectToken } from '../selectors/users'

function* getProfile(action) {
  try {
    const token = yield select(selectToken);
    const user: any = 'testing' //yield call(getProfileRequest, action.payload);
    sendUserData(token, user);
    yield put(getProfileSuccessAction(user))
  } catch (error: any) {
    yield put(getProfileFailAction(error.message))
  }
}

// function* getUsers(action) {
//   try {
//     const { users } = yield call("", action.payload.query);
//     yield put(getUsersSuccessAction({ users }))
//   } catch (error: any) {
//     yield put(getUsersFailAction(error.message))
//   }
// }

function* setSessionToken(action) {
  const token = action.payload.token;
  const user = yield select(selectProfile);
  sendUserData(token, user);
  yield put(getProfileAction())
}

function sendUserData(token: string, user: User) {
  // chrome?.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
  //   chrome.tabs.sendMessage(tabs[0]?.id ?? 0, { type: 'getUser', payload: { token } });
  // });
}

export function* watch() {
  yield takeLatest(GET_PROFILE, getProfile)
  //yield takeLatest(GET_USERS, getUsers)
  yield takeLatest(SET_SESSION_TOKEN, setSessionToken)
}
