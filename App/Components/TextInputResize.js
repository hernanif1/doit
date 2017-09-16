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
        onSubmitEditing={() => false}
        returnKeyType='go'
        maxHeight={200}
        minHeight={45}
        maxLength={80}
        onChangeText={(value) => this.setState({value})}
        style={[newStyle]}
        editable
        autoFocus
        multiline
        value={this.state.value}
        onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
      />
    )
  }
}
export default TextInputResize
