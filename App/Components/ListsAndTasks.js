import React from 'react'
import { SectionList } from 'react-native'
import PropTypes from 'prop-types'

import { Task, ListHeader } from './'

/**
*  @typedef eventList
*  @type {array}
*  @property {string} day Dia do evento por extenso em 3 letras (ex: Ter)
*  @property {string} description Descrição do evento
*  @property {string} dateTime Data e hora do evento (ex: 25 de novembro às 18:30)
*/

/**
 * Lista os eventos
 * @param {eventList} events Lista dos eventos
 */
const ListsAndTasks = ({ data }) => {
  return (
    <SectionList
      style={{ paddingHorizontal: 16 }}
      renderItem={({item}) => <Task {...item} />}
      contentInset={{bottom: 100}}
      renderSectionHeader={({section}) => <ListHeader title={section.title} />}
      sections={data}
      keyExtractor={(item) => item.id}
    />
  )
}

ListsAndTasks.propTypes = {
}

export default ListsAndTasks
