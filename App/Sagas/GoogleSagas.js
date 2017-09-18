import { call, put } from 'redux-saga/effects'
import GoogleActions from 'doit/App/Redux/GoogleRedux'
import formatListsAndTasks from 'doit/App/Transforms/formatListsAndTasks'
import removeLastBlankTask from 'doit/App/Transforms/removeLastBlankTask'

export function * getListsOfTasks (api, { token }) {
  // make the call to the api
  const response = yield call(api.getListsOfTasks, token)
  if (response.ok) {
    // format response
    let listsApi = response.data.items
    let listsAndTasksApi = yield getTasksFromLists(api, token, listsApi)
    let formatedListsAndTasks = formatListsAndTasks(listsAndTasksApi)
    let listsAndTasks = removeLastBlankTask(formatedListsAndTasks)
    // dispatch action
    yield put(GoogleActions.listSuccess(listsAndTasks))
  } else {
    yield put(GoogleActions.listFailure())
  }
}

function * getTasksFromLists (api, token, lists) {
  let listsAndTasks = yield lists.map(function * (list) {
    const response = yield call(api.getTasksOfList, list.id, token)
    let tasks = response.data.items
    return { list, tasks }
  })
  return listsAndTasks
}

export function * updateTaskById (api, { listId, taskId, data, token }) {
  const response = yield call(api.updateTask, listId, taskId, data, token)
  if (response.ok) {
    yield put(GoogleActions.updateTaskSuccess(response))
  } else {
    yield put(GoogleActions.updateTaskFailure())
  }
}

export function * saveListAndTasks (api, { generalListId, listTitle, tasks, token }) {
  let listId = generalListId

  // Create List
  if (listTitle !== '') {
    listId = yield createList(api, { listTitle, token })
  }

  // Create Tasks
  yield tasks.map(function * (task) {
    return yield call(api.createTask, listId, {title: task.title}, token)
  })

  // response
  yield put(GoogleActions.saveTaskSuccess())
}

function * createList (api, { listTitle, token }) {
  const response = yield call(api.createList, {title: listTitle}, token)
  if (response.ok) {
    return response.data.id
  } else {
    yield put(GoogleActions.updateTaskFailure()) // TODO: change method
  }
}
