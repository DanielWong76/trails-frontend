import { createSelector } from 'reselect'
import { RootState } from '../reducers'
import { UserState } from '../reducers/users'

const userState = (state: RootState) => state.users

export const selectToken = createSelector(
  userState,
  (user: UserState) => user.token ?? ''
)

export const selectProfile = createSelector(
  userState,
  (user: UserState) => user.user
)
export const selectUsers = createSelector(
  userState,
  (user: UserState) => user.users
)

export const selectLoading = createSelector(
  userState,
  (user: UserState) => user.loading
)

export const selectError = createSelector(
  userState,
  (user: UserState) => user.error
)