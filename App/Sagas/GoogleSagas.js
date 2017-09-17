import { call, put } from 'redux-saga/effects'
import GoogleActions from 'doit/App/Redux/GoogleRedux'
import formatListsAndTasks from 'doit/App/Transforms/formatListsAndTasks'
import clearListsAndTasksIfEmpty from 'doit/App/Transforms/clearListsAndTasksIfEmpty'
import removeLastBlankTask from 'doit/App/Transforms/removeLastBlankTask'

export function * getListsOfTasks (api, { token }) {
  // make the call to the api
  const response = yield call(api.getListsOfTasks, token)
  if (response.ok) {
    let listsApi = response.data.items
    let listsAndTasksApi = yield getTasksFromLists(api, token, listsApi)
    let formatedListsAndTasks = formatListsAndTasks(listsAndTasksApi)
    let clearListsAndTasks = clearListsAndTasksIfEmpty(formatedListsAndTasks)
    let listsAndTasks = removeLastBlankTask(clearListsAndTasks)
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
  // make the call to the api
  const response = yield call(api.updateTask, listId, taskId, data, token)
  if (response.ok) {
    yield put(GoogleActions.updateTaskSuccess(response))
  } else {
    yield put(GoogleActions.updateTaskFailure())
  }
}
