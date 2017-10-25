export const GET_USER_TOKEN = 'auth/get-user-token'
export const getUserToken = (username) => ({
  type: GET_USER_TOKEN,
  payload: username
})
