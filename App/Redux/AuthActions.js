export const GET_USER_TOKEN = 'TOKEN_REQUEST'
export const GET_USER_TOKEN_SUCCESS = 'TOKEN_SUCCESS'
export const GET_USER_TOKEN_FAILURE = 'TOKEN_FAILURE'

export const getUserToken = (username) => ({
  type: GET_USER_TOKEN,
  payload: username
})

export const tokenSuccess = (token) => ({
  type: GET_USER_TOKEN_SUCCESS,
  payload: token
})

export const getUserTokenFailure = () => ({
  type: GET_USER_TOKEN_FAILURE
})