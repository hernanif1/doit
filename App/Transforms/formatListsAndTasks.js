export default listsAndTasks => {
  return listsAndTasks.map((item, index) => {
    return {
      id: item.list.id,
      title: (index === 0) ? 'General' : item.list.title,
      data: item.tasks ? formatTasks(item.tasks) : []
    }
  })
}

function formatTasks (tasks) {
  return tasks.map(item => ({
    id: item.id,
    title: item.title,
    isChecked: item.status === 'completed'
  }))
}
