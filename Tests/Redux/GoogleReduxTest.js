import Actions, { reducer, INITIAL_STATE } from 'doit/App/Redux/GoogleRedux'
const token = '123'

test('request', () => {
  const state = reducer(INITIAL_STATE, Actions.listRequest(token))
  expect(state.fetching).toBe(true)
  expect(state.accessToken).toBe('123')
})

test('success', () => {
  const records = []
  const state = reducer(INITIAL_STATE, Actions.listSuccess(records))
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
  expect(state.listsAndTasks).toEqual([])
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.listFailure())
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})

test('setToken', () => {
  const state = reducer(INITIAL_STATE, Actions.setToken(token))
  expect(state.accessToken).toBe('123')
})

test('setFilter', () => {
  let filters = ['all', 'done', 'undone']
  filters.map(item => {
    const state = reducer(INITIAL_STATE, Actions.setFilter(item))
    expect(state.filters).toMatchSnapshot()
  })
})

test('updateTaskFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.updateTaskFailure())
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})
