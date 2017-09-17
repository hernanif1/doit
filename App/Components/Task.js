import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { Images, Colors } from 'doit/App/Themes'

const Task = ({ listId, id, title, isChecked, handleCheck }) => {
  let checkIcon = Images.checkUndone
  let style = { color: Colors.black, fontSize: 16, marginLeft: 8, marginTop: -4 }
  if (isChecked) {
    style = {
      ...style,
      color: Colors.grayLight,
      textDecorationLine: 'line-through'
    }
    checkIcon = Images.checkDone
  }
  return (
    <TouchableOpacity onPress={() => handleCheck(listId, id, isChecked)} style={{ flexDirection: 'row', padding: 16, marginLeft: 22 }}>
      <Image source={checkIcon} style={{ width: 16, height: 16 }} />
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  )
}

Task.propTypes = {

}

export default Task
