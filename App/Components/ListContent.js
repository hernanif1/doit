import React from 'react'
import { View } from 'react-native'
import { ListsAndTasks, FilterTasks } from 'doit/App/Components/'

const ContentList = ({ listsAndTasks, filters, onFilter, handleCheck }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <ListsAndTasks data={listsAndTasks} handleCheck={handleCheck} />
      <FilterTasks filters={filters} handleFilter={onFilter} />
    </View>
  )
}

export default ContentList
