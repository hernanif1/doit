export default listsAndTasks => {
  if (listsAndTasks.length > 1) return listsAndTasks
  if (listsAndTasks[0].data.length > 1) return listsAndTasks
  if (listsAndTasks[0].data[0].title === '') return []
}
