import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { TextInputResize } from 'doit/App/Components/'
import { Colors, Images } from 'doit/App/Themes'

const TaskEdit = ({props}) => {
  let checkIcon = props.isActive ? Images.checkUndoneActive : Images.checkUndone
  return (
    <View style={styles.container}>
      <Image source={checkIcon} style={styles.mediumIcon} />
      <TextInputResize {...props} style={styles.input} />

      {/* remove task button */}
      {
        props.index !== 0 &&
        <TouchableOpacity onPress={() => props.handleRemoveTask(props.index)} style={{ flexDirection: 'row' }}>
          <Image source={Images.trash} style={styles.mediumIcon} />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 4
  },
  input: {
    fontSize: 16,
    color: Colors.black,
    flex: 1,
    marginTop: -14
  },
  mediumIcon: {
    width: 16,
    height: 16
  }
})

TaskEdit.propTypes = {

}

export default TaskEdit
