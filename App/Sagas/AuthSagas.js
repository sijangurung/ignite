import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * getUserToken (api, action) {
  console.tron.log('Hello, from getUserToken');
  const { username } = action
  console.tron.log('username: '+ action);
  // make the call to the api
  const response = yield call(api.getUserToken, username)

  if(response.ok){
    console.tron.log("Token: "+ response.data.token)
    const token = response.data.token;
    yield put(AuthActions.tokenSuccess(token))
  }else{
    console.tron.log( 'ERROR: hi hihi'+ JSON.stringify(error));
    yield put(AuthActions.tokenFailure())
  }
}
