import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tokenRequest: ['username'],
  tokenSuccess: ['token'],
  tokenFailure: null
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  avatar: null,
  fetching: null,
  error: null,
  username: null
})

/* ------------- Reducers ------------- */

// request the token for a user
export const request = (state, { username }) =>
  state.merge({ fetching: true, username, token: null })

// successful avatar lookup
export const success = (state, action) => {
  const { token } = action
  return state.merge({ fetching: false, error: null, token })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, token: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOKEN_REQUEST]: request,
  [Types.TOKEN_SUCCESS]: success,
  [Types.TOKEN_FAILURE]: failure
})
