export default listsAndTasks => {
  if (listsAndTasks.length > 0) {
    return listsAndTasks.map(item => {
      let lastItem = item.data.length - 1
      if (item.data[lastItem].title === '') {
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
  }
}
