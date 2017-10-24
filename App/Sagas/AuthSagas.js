import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * getUserToken (api, action) {
  console.tron.log('Hello, from getUserToken');
  //alert('in getUserToken');
  const { username } = action
  //const  username  = 'mads'
  console.tron.log('username: ', username);
  // make the call to the api
  // const response = yield call(api.getUser, username)

  if (false) {
    const firstUser = path(['data', 'items'], response)[0]
    const avatar = firstUser.avatar_url
    // do data conversion here if needed
    //yield put(AuthActions.userSuccess(avatar))
  } else {
    console.tron.log( 'hi hihi');
    yield put( { type: AuthActions.TOKEN_FAILURE } )
    //yield put(AuthActions.userFailure())
  }
}
