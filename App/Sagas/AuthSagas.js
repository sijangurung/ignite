import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * getUserToken (api, action) {
  console.tron.log('Hello, from getUserToken');
  const { username } = action
  console.tron.log('username: ', username);
  // make the call to the api
  const response = yield call(api.getUserToken, username)
  console.tron.log('We got response: ', response); // It's empty here.

  //if (response.ok) {
  //  console.tron.log('We got response: ', response);
  //  yield put(AuthActions.userSuccess('OK'))
  //} else {
  //  console.tron.log( 'hi hihi');
  //  yield put( { type: AuthActions.TOKEN_FAILURE } )
  //  //yield put(AuthActions.userFailure())
  //}
}
