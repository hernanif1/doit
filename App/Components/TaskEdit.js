import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import { TextInputResize } from 'doit/App/Components/'
import { Colors, Images } from 'doit/App/Themes'

const TaskEdit = ({ title, isActive }) => {
  let checkIcon = isActive ? Images.checkUndoneActive : Images.checkUndone
  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginLeft: 4 }}>
      <Image source={checkIcon} style={{ width: 16, height: 16 }} />
      <TextInputResize style={{ fontSize: 16, color: Colors.black, flex: 1, marginTop: -14 }} />
    </View>
  )
}

TaskEdit.propTypes = {

}

export default TaskEdit
