import React from 'react'
import { View } from 'react-native'
import { ListsAndTasks, FilterTasks } from 'doit/App/Components/'
import PropTypes from 'prop-types'

const ContentList = ({ listsAndTasks, filters, onFilter, handleCheck }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <ListsAndTasks data={listsAndTasks} handleCheck={handleCheck} />
      <FilterTasks filters={filters} handleFilter={onFilter} />
    </View>
  )
}

ContentList.propTypes = {
  listsAndTasks: PropTypes.array,
  filters: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired
}
export default ContentList
