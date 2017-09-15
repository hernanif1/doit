import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

const TouchableElement = ({onPress, borderless, style}) => {
  let TouchableItem = TouchableOpacity
  if (Platform.OS === 'android') {
    TouchableItem = TouchableNativeFeedback
    borderless = (this.props.borderless) ? TouchableNativeFeedback.SelectableBackgroundBorderless() : TouchableNativeFeedback.Ripple()
  }
  return (
    <TouchableItem background={borderless} onPress={this.props.onPress} style={this.props.style}>
      {this.props.children}
    </TouchableItem>
  )
}

export default TouchableElement
