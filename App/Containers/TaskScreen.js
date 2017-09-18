import React, { Component } from 'react'
import {
  Modal,
  Image,
  View,
  ScrollView,
  TextInput,
  FlatList,
  BackHandler,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import ActionButton from 'react-native-action-button'
import { NavigationActions } from 'react-navigation'

import { Colors, Images } from 'doit/App/Themes/'
import { TaskEdit } from 'doit/App/Components/'
import GoogleActions from 'doit/App/Redux/GoogleRedux'

class Task extends Component {
  constructor (props) {
    super(props)
    this.props.resetCreatedTask()
    this.state = {
      saved: false
    }
  }

  static navigationOptions = {
    title: 'New tasks'
  }

  handleRemoveTask (index) {
    this.props.removeTask(index)
  }

  handleValueTasks (value, index) {
    this.props.setTaskValue(value, index)
  }

  handleSubmitTasks () {
    this.props.addEmptyTaskValue()
  }

  handleTaskFocus (index) {
    this.props.handleTaskFocus(index)
  }

  handleSave (index) {
    let { listsAndTasks, create, accessToken } = this.props.store
    let generalListId = listsAndTasks[0].id
    let titleNewList = create.list
    let tasks = create.tasks
    this.props.saveTaskRequest(generalListId, titleNewList, tasks, accessToken)
  }

  onBackPress = () => {
    this.props.goBack()
    return true
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextProps.store.saveSuccess && !this.state.saved) {
      this.setState({saved: true})
      this.props.reloadListAndTasks(this.props.token)
      this.props.goBack()  // TODO: Search better aproach to avoid side effects
    }
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  render () {
    return (
      <View style={{ flexGrow: 1, backgroundColor: Colors.white }}>
        {/* Modal after save tasks */}
        <Modal
          animationType='fade'
          transparent
          onRequestClose={() => false}
          visible={this.props.store.savingTasks}
        >
          <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.whiteOpacity }}>
            <ActivityIndicator color={Colors.blue} size='large' />
          </View>
        </Modal>

        {/* List scroll */}
        <ScrollView keyboardShouldPersistTaps='always' style={{padding: 16}}>
          {/* Title of List creation */}
          <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}
            placeholder='Insert a list title or will be general'
            placeholderTextColor={Colors.grayLight}
            underlineColorAndroid='transparent'
            selectionColor={Colors.blue}
            onChangeText={value => this.props.setListValue(value)}
            value={this.props.store.create.list}
            returnKeyType='go'
          />

          {/* Tasks creation */}
          <FlatList
            data={this.props.store.create.tasks}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <TaskEdit key={index}
                  index={index}
                  value={item.title}
                  handleValue={this.handleValueTasks.bind(this)}
                  handleSubmitTasks={this.handleSubmitTasks.bind(this)}
                  handleTaskFocus={this.handleTaskFocus.bind(this)}
                  handleRemoveTask={this.handleRemoveTask.bind(this)}
                  isActive={item.isActive} />
              )
            }}
          />
        </ScrollView>

        {/* Float Button */}
        <ActionButton
          buttonColor={Colors.blue}
          fixNativeFeedbackRadius
          icon={<Image source={Images.check} style={{ width: 20, height: 15 }} />}
          shadowStyle={{ shadowColor: Colors.blue, shadowRadius: 5, elevation: 5 }} // shadow properties works only in ios
          onPress={() => { this.handleSave() }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    store: {
      ...state.google
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setListValue: value => dispatch(GoogleActions.listValue(value)),
    setTaskValue: (value, index) => dispatch(GoogleActions.taskValue(value, index)),
    addEmptyTaskValue: () => dispatch(GoogleActions.addEmptyTaskValue()),
    handleTaskFocus: index => dispatch(GoogleActions.selectCreatedTask(index)),
    resetCreatedTask: () => dispatch(GoogleActions.resetCreatedTask()),
    removeTask: index => dispatch(GoogleActions.removeTask(index)),
    saveTaskRequest: (generalListId, listTitle, tasks, token) => dispatch(GoogleActions.saveTaskRequest(generalListId, listTitle, tasks, token)),
    goToListScreen: () => dispatch(NavigationActions.navigate({ routeName: 'ListScreen' })),
    reloadListAndTasks: token => dispatch(GoogleActions.listRequest(token)),
    goBack: () => dispatch(NavigationActions.back({key: null}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
