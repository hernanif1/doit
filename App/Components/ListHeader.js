import React from 'react'
import { View, Text, Image } from 'react-native'

import { Colors, Images } from 'doit/App/Themes/'

/**
 * Separador do mês
 * @param {string} title - Nome do mês
 */
const ListHeader = ({title}) => {
  if (!title) return <View style={{ height: 50 }} />  // Set an empty item to let space to filter

  return (
    <View style={{ flexDirection: 'row', marginTop: 22, alignItems: 'center', backgroundColor: Colors.white }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        { title === 'General'
          ? <Image source={Images.general} style={{ width: 24, height: 24 }} />
          : <View style={{width: 24}} />
        }
        <Text style={{ fontSize: 20, color: Colors.black, fontWeight: 'bold', marginLeft: 8 }}> {title} </Text>
      </View>
      <Image source={Images.moreDark} style={{ width: 24, height: 12 }} />
    </View>
  )
}

export default ListHeader
