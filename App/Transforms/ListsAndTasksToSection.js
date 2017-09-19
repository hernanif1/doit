import _ from 'lodash'

export default listsAndTasks => {
  if (listsAndTasks.length === 0) return []
  if (listsAndTasks.tasks === []) return []
  // Group by key
  let lists = _.chain(listsAndTasks)
    .groupBy('title')
    .map((key, values) => {
      return {
        title: key,
        data: values
      }
    })
    .value()
  return lists
}
