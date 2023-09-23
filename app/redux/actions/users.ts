import User from '../../models/user'
import {
  SET_SESSION_TOKEN,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  LOGIN,
  SIGNUP,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from './constants'

export const setSessionTokenAction = (token: string) => ({
  type: SET_SESSION_TOKEN,
  payload: { token },
})

export const logoutAction = () => ({
  type: LOGOUT,
})

export const getProfileAction = (forceUpdate: boolean = false) => ({
  type: GET_PROFILE,
  payload: forceUpdate
})

export const getProfileSuccessAction = (user: User) => ({
  type: GET_PROFILE_SUCCESS,
  payload: user,
})

export const getProfileFailAction = (error: string) => ({
  type: GET_PROFILE_FAIL,
  payload: error,
})

export const getUsersAction = (query: string) => ({
  type: GET_USERS,
  payload: { query }
})

export const getUsersSuccessAction = (users: User[]) => ({
  type: GET_USERS_SUCCESS,
  payload: { users },
})

export const getUsersFailAction = (error: string) => ({
  type: GET_USERS_FAIL,
  payload: error,
})

export const loginAction = (email: string, password: string) => ({
  type: LOGIN,
  payload: { email, password }
})

export const loginSuccessAction = (user: User) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailAction = (error: string) => ({
  type: LOGIN_FAIL,
  payload: error,
})

export const signUpAction = (firstName: string, lastName: string, email: string, password: string) => ({
  type: SIGNUP,
  payload: { firstName, lastName, email, password }
})

export const signUpSuccessAction = (user: User) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
})

export const signUpFailAction = (error: string) => ({
  type: SIGNUP_FAIL,
  payload: error,
})