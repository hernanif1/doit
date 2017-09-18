import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */
import { GoogleTypes } from '../Redux/GoogleRedux'

/* ------------- Sagas ------------- */
import { getListsOfTasks, updateTaskById, saveListAndTasks } from './GoogleSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas receive extra parameters in addition to an action
    takeLatest(GoogleTypes.LIST_REQUEST, getListsOfTasks, api),
    takeLatest(GoogleTypes.UPDATE_TASK, updateTaskById, api),
    takeLatest(GoogleTypes.SAVE_TASK_REQUEST, saveListAndTasks, api)
  ])
}
