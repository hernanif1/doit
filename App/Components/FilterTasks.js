import React from 'react'
import {
  Text, Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import { Images } from 'doit/App/Themes'
import { Colors } from 'doit/App/Themes/'

const FilterTasks = ({ filters, handleFilter }) => {
  return (
    <Image source={Images.gradientWhite} resizeMode='cover' style={{ position: 'absolute', bottom: 0, flexDirection: 'row', padding: 16, height: 88, alignItems: 'center' }}>
      {filters.map(item => {
        let color = item.active ? [styles.item, styles.active] : styles.item
        return (
          <TouchableOpacity key={item.title} onPress={() => handleFilter(item.title)} style={{ flexDirection: 'row', paddingVertical: 5 }}>
            <Text style={color}>{item.title}</Text>
          </TouchableOpacity>
        )
      })}
    </Image>
  )
}
const styles = StyleSheet.create({
  active: {
    backgroundColor: Colors.grayLight,
    color: Colors.white
  },
  item: {
    borderRadius: 30,
    textAlign: 'center',
    marginRight: 10,
    paddingHorizontal: 12,
    height: 36,
    color: Colors.black,
    fontSize: 16,
    marginLeft: 8,
    marginTop: -4,
    minWidth: 47,
    textAlignVertical: 'center'
  }
})
FilterTasks.propTypes = {

}
export default FilterTasks
