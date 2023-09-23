import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN,
  SIGNUP,
  SET_SESSION_TOKEN,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from '../actions/constants'
import { ReduxAction } from '../actions'
import User from '../../models/user'

export interface UserState {
  user?: User;
  users?: User[];
  error: string;
  token?: string;
  loading: boolean;
}

// Initial State
const initialState: UserState = {
  error: '',
  loading: false,
  token: ''
}

const userReducer = (
  state: UserState = initialState,
  action: ReduxAction
) => {
  switch (action.type) {
    case SET_SESSION_TOKEN: {
      return {
        ...state,
        error: '',
        token: action.payload.token
      }
    }
    case GET_USERS: {
      return {
        ...state,
        error: '',
        loading: true,
      }
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        error: '',
        loading: false,
        users: action.payload.users
      }
    }
    case GET_USERS_FAIL: {
      return {
        ...state,
        loading: true,
        error: action.payload,
      }
    }
    case GET_PROFILE_SUCCESS: {
      return {
        ...state,
        error: '',
        loading: false,
        user: action.payload,
      }
    }
    case GET_PROFILE:
    case SIGNUP:
    case LOGIN:
      {
        return {
          ...state,
          error: '',
          loading: true,
        }
      }
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      {
        return {
          ...state,
          error: '',
          loading: false,
          user: action.payload,
        }
      }
    case SIGNUP_FAIL:
    case LOGIN_FAIL: {
      // notification.error({
      //   message: action.payload,
      // })
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case GET_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        token: null,
      }
    }
    default: {
      return state
    }
  }
}

// Exports
export default userReducer
