import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import PropTypes from 'prop-types'

import { Images, Colors } from 'doit/App/Themes'

const Task = ({ listId, id, title, isChecked, handleCheck, isLastItem, deleteTask }) => {
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
  if (isLastItem) {
    style = { ...style, paddingBottom: 100 }
  }
  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, padding: 16, marginLeft: 22 }}>
      <TouchableOpacity onPress={() => handleCheck(listId, id, isChecked)} style={{ flexDirection: 'row', flex: 1 }}>
        <Image source={checkIcon} style={{ width: 16, height: 16 }} />
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

Task.propTypes = {

}

export default Task
