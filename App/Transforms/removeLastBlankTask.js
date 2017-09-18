export default listsAndTasks => {
  console.log('listsAndTasks', listsAndTasks)
  if (listsAndTasks.length >= 1) {
    let listsTasks = listsAndTasks.map((item, index) => {
      let lastItem = item.data.length - 1
      // check if the title is empty, but if is not the first element
      if (item.data[lastItem].title === '' && !(item.data.length === 1 && index === 0)) {
        return {
          ...item,
          data: item.data.slice(0, -1)
        }
      }
      return {
        ...item,
        data: item.data
      }
    })

    // Set as true last item of last task to let margin in the component task
    let listLength = listsTasks.length - 1
    let taskLength = listsTasks[listLength].data.length - 1
    if (taskLength >= 0) {
      listsTasks[listLength].data[taskLength].isLastItem = true
      return listsTasks
    }
    if (taskLength) {
      listsTasks[listLength].isLastItem = true
      return listsTasks
    }
  }
}
