import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  updateTask: ['listId', 'taskId', 'data', 'token'],
  updateTaskSuccess: ['records'],
  updateTaskFailure: null,
  setFilter: ['filter'],
  setToken: ['token'],
  listRequest: ['token'],
  listSuccess: ['records'],
  listFailure: null
})

export const GoogleTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  accessToken: '',
  listsAndTasks: [],
  filters: [
    { title: 'all', active: true },
    { title: 'done', active: false },
    { title: 'undone', active: false }
  ],
  fetching: true,
  error: false
})

/* ------------- Reducers ------------- */
export const updateTask = (state, {listId, taskId, data, token}) => {
  return { ...state }
}

export const updateTaskSuccess = (state, {records}) => {
  let response = {
    id: records.data.id,
    title: records.data.title,
    isChecked: records.data.status === 'completed'
  }
  let listsAndTasks = state.listsAndTasks.map(list => {
    let data = list.data.map(task => {
      if (task.id === records.data.id) return response
      return task
    })
    return {...list, data}
  })
  return { ...state, fetching: false, error: false, listsAndTasks }
}

export const updateTaskFailure = (state) => {
  return { ...state, fetching: false, error: true }
}

export const setFilter = (state, {filter}) => {
  let filters = state.filters.map(item => {
    return {
      title: item.title,
      active: item.title === filter
    }
  })
  return { ...state, filters }
}

export const setToken = (state, {token}) => {
  return state.merge({ accessToken: token })
}

// request the user lists
export const request = (state, { token }) => {
  return state.merge({ fetching: true, accessToken: state.accessToken })
}

// successful loaded lists
export const success = (state, { records }) => {
  return state.merge({ fetching: false, error: false, listsAndTasks: records })
}

// failed to get the avatar
export const failure = (state) => {
  return { ...state, fetching: false, error: true }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_TASK]: updateTask,
  [Types.UPDATE_TASK_SUCCESS]: updateTaskSuccess,
  [Types.UPDATE_TASK_FAILURE]: updateTaskFailure,
  [Types.SET_FILTER]: setFilter,
  [Types.SET_TOKEN]: setToken,
  [Types.LIST_REQUEST]: request,
  [Types.LIST_SUCCESS]: success,
  [Types.LIST_FAILURE]: failure
})
