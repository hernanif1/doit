import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

import { Colors, Images } from 'doit/App/Themes/'

const TasksNotFound = () => {
  return (
    <View style={styles.container} >
      <View style={styles.textContainer}>
        <Text style={styles.title}>What about </Text>
        <Text style={[styles.title, { color: Colors.white, backgroundColor: Colors.blue }]}>to create</Text>
        <Text style={styles.title}>some tasks?</Text>
      </View>
      <Image source={Images.illustration} style={styles.illustration} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white
  },
  textContainer: {
    width: 260,
    height: 114,
    marginTop: 24,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  title: {
    fontSize: 36,
    lineHeight: 38.0,
    color: Colors.gray,
    marginLeft: 30
  },
  illustration: {
    position: 'absolute',
    bottom: 0,
    width: 288,
    height: 416
  }
})

export default TasksNotFound
