import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  create: [],
  addEmptyTaskValue: null,
  removeTask: ['index'],
  listValue: ['value'],
  taskValue: ['value', 'index'],
  saveTaskRequest: ['generalListId', 'listTitle', 'tasks', 'token'],
  saveTaskSuccess: ['records'],
  selectCreatedTask: ['index'],
  resetCreatedTask: null,
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
  create: {
    list: '',
    tasks: [{
      title: '',
      isActive: true
    }]
  },
  listsAndTasks: [],
  filters: [
    { title: 'all', active: true },
    { title: 'done', active: false },
    { title: 'undone', active: false }
  ],
  fetching: true,
  savingTasks: false,
  saveSuccess: false,
  error: false
})

/* ------------- Reducers ------------- */
export const listValue = (state, {value}) => {
  let create = {...state.create, list: value}
  return {...state, create}
}

export const taskValue = (state, {value, index}) => {
  let tasks = [...state.create.tasks]
  tasks[index].title = value
  let create = {...state.create, tasks}
  return {...state, create}
}

export const addEmptyTaskValue = (state) => {
  let tasks = [...state.create.tasks]
  tasks = tasks.map(item => {
    return {...item, isActive: false}
  })
  tasks.push({ title: '', isActive: true })
  let create = {...state.create, tasks}
  return {...state, create}
}

export const removeTask = (state, {index}) => {
  let tasks = [...state.create.tasks]
  if (tasks.length > 1) {
    tasks.splice(index, 1)
  }
  let created = {...state.create, tasks}
  return { ...state, create: created }
}

export const saveTaskRequest = (state) => {
  return { ...state, savingTasks: true }
}

export const saveTaskSuccess = (state) => {
  return { ...state, fetching: false, error: false, saveSuccess: true, savingTasks: false }
}

export const selectCreatedTask = (state, {index}) => {
  let tasks = [...state.create.tasks]
  tasks = tasks.map((item, itemIndex) => {
    let isIndex = itemIndex === index
    return {...item, isActive: isIndex}
  })

  let create = {...state.create, tasks}
  return {...state, create}
}

export const resetCreatedTask = (state) => {
  let create = {
    list: '',
    tasks: [{
      title: '',
      isActive: true
    }]
  }
  return {...state, create, saveSuccess: false}
}

export const updateTask = (state, {listId, taskId, data, token}) => {
  let isChecked = data.status === 'completed'
  let listsAndTasks = state.listsAndTasks.map(list => {
    let tasks = list.data.map(task => {
      if (task.id === taskId) return { ...task, isChecked }
      return task
    })
    return {...list, data: tasks}
  })
  return { ...state, listsAndTasks }
}

export const updateTaskSuccess = (state, {records}) => {
  return { ...state, fetching: false, error: false }
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
  return { ...state, accessToken: token }
}

// request the user lists
export const request = (state, { token }) => {
  return { ...state, fetching: true, accessToken: token }
}

// successful loaded lists
export const success = (state, { records }) => {
  return { ...state, fetching: false, error: false, listsAndTasks: records }
}

// failed to get the lists
export const failure = (state) => {
  return { ...state, fetching: false, error: true }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_VALUE]: listValue,
  [Types.TASK_VALUE]: taskValue,
  [Types.RESET_CREATED_TASK]: resetCreatedTask,
  [Types.ADD_EMPTY_TASK_VALUE]: addEmptyTaskValue,
  [Types.REMOVE_TASK]: removeTask,
  [Types.SAVE_TASK_REQUEST]: saveTaskRequest,
  [Types.SAVE_TASK_SUCCESS]: saveTaskSuccess,
  [Types.SELECT_CREATED_TASK]: selectCreatedTask,
  [Types.UPDATE_TASK]: updateTask,
  [Types.UPDATE_TASK_SUCCESS]: updateTaskSuccess,
  [Types.UPDATE_TASK_FAILURE]: updateTaskFailure,
  [Types.SET_FILTER]: setFilter,
  [Types.SET_TOKEN]: setToken,
  [Types.LIST_REQUEST]: request,
  [Types.LIST_SUCCESS]: success,
  [Types.LIST_FAILURE]: failure
})
