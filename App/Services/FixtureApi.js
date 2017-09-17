export default {
  // Functions return fixtures
  getListsOfTasks: (apiKey) => {
    return {
      ok: true,
      data: require('../Fixtures/listsOfTasks.json')
    }
  }
}
