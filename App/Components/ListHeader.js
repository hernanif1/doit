import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { Colors, Images } from 'doit/App/Themes/'

const ListHeader = ({title}) => {
  if (!title) return <View style={{ height: 50 }} />  // Set an empty item to let space to filter

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {
          title === 'General'
          ? <Image source={Images.general} style={styles.generalIcon} />
          : <View style={styles.emptySpace} />
        }
        <Text style={styles.title}> {title} </Text>
      </View>
      <Image source={Images.moreDark} style={styles.more} />
    </View>
  )
}

ListHeader.propTypes = {
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 22,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
    marginLeft: 8
  },
  generalIcon: {
    width: 24,
    height: 24
  },
  emptySpace: {
    width: 24
  },
  more: {
    width: 24,
    height: 12
  }
})
export default ListHeader
