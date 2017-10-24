import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * getUserToken (api, action) {
  console.tron.log('Hello, from getUserToken');
  alert('in getUserToken');
  const { username } = action
  // make the call to the api
  const response = yield call(api.getUser, username)

  if (response.ok) {
    const firstUser = path(['data', 'items'], response)[0]
    const avatar = firstUser.avatar_url
    // do data conversion here if needed
    yield put(AuthActions.userSuccess(avatar))
  } else {
    yield put(AuthActions.userFailure())
  }
}
