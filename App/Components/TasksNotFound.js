import React from 'react'
import { Image, View, Text } from 'react-native'

import { Colors, Images } from 'doit/App/Themes/'

const TasksNotFound = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: Colors.white }} >
      <View style={{ width: 260, height: 114, marginTop: 24, flexWrap: 'wrap', flexDirection: 'row' }}>
        <Text style={{ fontSize: 36, lineHeight: 38.0, color: Colors.gray, marginLeft: 30 }}>What about </Text>
        <Text style={{ fontSize: 36, lineHeight: 38.0, color: Colors.white, marginLeft: 30, backgroundColor: Colors.blue }}>to create</Text>
        <Text style={{ fontSize: 36, lineHeight: 38.0, color: Colors.gray, marginLeft: 30 }}>some tasks?</Text>
      </View>
      <Image source={Images.illustration} style={{ position: 'absolute', bottom: 0, width: 288, height: 416 }} />
    </View>
  )
}

export default TasksNotFound
