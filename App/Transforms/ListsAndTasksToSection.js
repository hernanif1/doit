import _ from 'lodash'

export default ListsAndTasksToSection => {
  // Format os textos de cada campo e cria a chave da section
  let lists = _.map(ListsAndTasksToSection, function (item) {
    return {
      id: item.id,
      title: item.title,
      isChecked: item.status === 'completed'
    }
  })

  // Group by key
  lists = _.chain(lists)
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
