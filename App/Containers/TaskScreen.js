import React, { Component } from 'react'
import { Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import ActionButton from 'react-native-action-button'

// import styles from './Styles/LoginScreenStyles'
import { Colors, Images } from 'doit/App/Themes/'
import { TaskEdit } from 'doit/App/Components/'

class Task extends Component {
  static navigationOptions = {
    title: 'New tasks'
  }

  render () {
    return (
      <View style={{ flexGrow: 1, padding: 16, backgroundColor: Colors.white }}>

        {/* List creation */}
        <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}
          placeholder='Insert a list title or will be general'
          placeholderTextColor={Colors.grayLight}
          underlineColorAndroid='transparent'
          selectionColor={Colors.blue}
          returnKeyType='go'
        />

        <TaskEdit isActive />

        {/* Float Button */}
        <ActionButton
          buttonColor={Colors.blue}
          fixNativeFeedbackRadius
          icon={<Image source={Images.check} style={{ width: 20, height: 15 }} />}
          shadowStyle={{ shadowColor: Colors.blue, shadowRadius: 5, elevation: 5 }} // shadow properties works only in ios
          onPress={() => { this.props.goToTaskScreen() }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
