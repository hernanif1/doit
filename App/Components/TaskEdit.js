import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { TextInputResize } from 'doit/App/Components/'
import { Colors, Images } from 'doit/App/Themes'

const TaskEdit = (props) => {
  let checkIcon = props.isActive ? Images.checkUndoneActive : Images.checkUndone
  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginLeft: 4 }}>
      <Image source={checkIcon} style={{ width: 16, height: 16 }} />
      <TextInputResize {...props} style={{ fontSize: 16, color: Colors.black, flex: 1, marginTop: -14 }} />

      {/* remove task button */}
      {
        props.index !== 0 &&
        <TouchableOpacity onPress={() => props.handleRemoveTask(props.index)} style={{ flexDirection: 'row' }}>
          <Image source={Images.trash} style={{ width: 16, height: 16 }} />
        </TouchableOpacity>
      }
    </View>
  )
}

TaskEdit.propTypes = {

}

export default TaskEdit
