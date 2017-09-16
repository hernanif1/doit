import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { Images, Colors } from 'doit/App/Themes'

const Task = ({ title, isChecked, toogleCheck }) => {
  let checkIcon = isChecked ? Images.checkDone : Images.checkUndone
  return (
    <TouchableOpacity onPress={toogleCheck} style={{ flexDirection: 'row', padding: 16, marginLeft: 22 }}>
      <Image source={checkIcon} style={{ width: 16, height: 16 }} />
      <Text style={{ color: Colors.grayLight, fontSize: 16, marginLeft: 8, marginTop: -4 }}>{title}</Text>
    </TouchableOpacity>
  )
}

Task.propTypes = {

}

export default Task
