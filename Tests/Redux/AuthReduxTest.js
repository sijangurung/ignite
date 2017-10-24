import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/AuthRedux'

test('request', () => {
  const username = 'taco'
  const state = reducer(INITIAL_STATE, Actions.tokenRequest(username))

  expect(state.fetching).toBe(true)
  expect(state.username).toBe(username)
  expect(state.token).toBeNull()
})

test('success', () => {
  const token = 'https://gist.github.com/stabenfeldt/14db8a93d8bffd5258e29c03e2dfe234'
  const state = reducer(INITIAL_STATE, Actions.tokenSuccess(token))

  expect(state.fetching).toBe(false)
  expect(state.token).toBe(token)
  expect(state.error).toBeNull()
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.tokenFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.token).toBeNull()
})
