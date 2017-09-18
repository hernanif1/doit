import React from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCheck(listId, id, isChecked)} style={styles.touchArea}>
        <Image source={checkIcon} style={styles.check} />
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    padding: 16,
    marginLeft: 22
  },
  check: {
    width: 16,
    height: 16
  },
  touchArea: {
    flexDirection: 'row',
    flex: 1
  }
})

Task.propTypes = {
  listId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
  isLastItem: PropTypes.bool,
  deleteTask: PropTypes.func
}

export default Task
