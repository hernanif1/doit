import React, { Component } from 'react'
import { TextInput } from 'react-native'

import { Colors } from 'doit/App/Themes/'

class TextInputResize extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newValue: '',
      height: 40
    }
  }

  updateSize = (height) => {
    this.setState({
      height
    })
  }

  render () {
    const { height } = this.state
    let { title, handleValue, handleSubmitTasks, handleTaskFocus, index } = this.props
    let newStyle = {
      height,
      ...this.props.style
    }
    return (
      <TextInput
        placeholder='Describe your task'
        placeholderTextColor={Colors.grayLight}
        underlineColorAndroid='transparent'
        selectionColor={Colors.blue}
        onSubmitEditing={() => handleSubmitTasks()}
        maxHeight={200}
        minHeight={45}
        maxLength={80}
        onChangeText={value => handleValue(value, index)}
        onFocus={value => handleTaskFocus(index)}
        style={[newStyle]}
        editable
        autoFocus
        multiline
        value={title}
        onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
        returnKeyType='go'
      />
    )
  }
}
export default TextInputResize
