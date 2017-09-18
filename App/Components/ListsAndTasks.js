import React from 'react'
import { SectionList } from 'react-native'
import PropTypes from 'prop-types'

import { Task, ListHeader } from './'

const ListsAndTasks = ({ data, handleCheck }) => {
  return (
    <SectionList
      style={{ paddingHorizontal: 16 }}
      renderItem={props => <Task listId={props.section.id} {...props.item} handleCheck={handleCheck} />}
      contentInset={{bottom: 100}}
      renderSectionHeader={({section}) => <ListHeader title={section.title} />}
      sections={data}
      keyExtractor={(item) => item.id}
    />
  )
}

ListsAndTasks.propTypes = {
  data: PropTypes.array.isRequired,
  handleCheck: PropTypes.func.isRequired
}

export default ListsAndTasks
