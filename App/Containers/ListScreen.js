import React, { Component } from 'react'
import { View, StatusBar, ActivityIndicator, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { GoogleSignin } from 'react-native-google-signin'
import ActionButton from 'react-native-action-button'
import _ from 'lodash'

import { TasksNotFound, ListContent, SignOutButton } from 'doit/App/Components/'
import { Colors } from 'doit/App/Themes/'
import GoogleActions from 'doit/App/Redux/GoogleRedux'

let accessToken // TODO: Find a better pattern to accessToken

class List extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: 'Lists',
      headerLeft: null,
      headerRight: <SignOutButton handleSignOut={params.handleSignOut} />
    }
  }

  async handleSignOut () {
    await GoogleSignin.signOut()
    this.props.goToSignInScreen()
  }

  componentDidMount () {
    Keyboard.dismiss()
    accessToken = this.props.store.accessToken
    this.props.getListOfTasks(accessToken)
    this.props.navigation.setParams({ handleSignOut: this.handleSignOut.bind(this) })
  }

  handleFilter (filter) {
    this.props.setFilter(filter)
  }

  handleCheck (listId, taskId, currentStatus) {
    let status = !currentStatus ? 'completed' : 'needsAction'
    this.props.updateTask(listId, taskId, { status, completed: null }, accessToken)
  }

  filterList (listsAndTasks, filter) {
    if (!listsAndTasks) return []
    return listsAndTasks.map(list => {
      let data = list.data.filter(task => {
        if (filter === 'all') return true
        if (filter === 'done') return task.isChecked
        if (filter === 'undone') return !task.isChecked
      })
      if (data) return {...list, data}
    })
  }

  checkIfContentExist (listsAndTasks) {
    if (listsAndTasks.length === 0) return false
    if (listsAndTasks.length > 1) return true
    if (listsAndTasks[0].data.length === 0) return true // if 0 is because is a filter
    if (listsAndTasks[0].data.length > 1) return true
    if (listsAndTasks[0].data[0].title === '') return false
    return true
  }

  hideGeneralListIfIsEmpty (listsAndTasks) {
    if (listsAndTasks.length === 0) return listsAndTasks
    if (listsAndTasks[0].data.length > 1) return listsAndTasks
    if (listsAndTasks[0].title === 'General' && listsAndTasks[0].data[0].title === '') {
      return listsAndTasks.slice(1)
    }
  }

  renderLoading () {
    return (
      <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={Colors.blue} size='large' />
      </View>
    )
  }

  renderContent (listsAndTasksFiltered, filters) {
    return (
      <View style={{flexGrow: 1}}>
        {/* Content */}
        {
          this.checkIfContentExist(listsAndTasksFiltered)
          ? <ListContent listsAndTasks={listsAndTasksFiltered}
            filters={filters}
            onFilter={this.handleFilter.bind(this)}
            handleCheck={this.handleCheck.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
            />
          : <TasksNotFound />
        }

        {/* Float Button */}
        <ActionButton
          buttonColor={Colors.blue}
          fixNativeFeedbackRadius
          shadowStyle={{ shadowColor: Colors.blue, shadowRadius: 3, elevation: 5 }} // shadowColor works only in ios
          onPress={() => { this.props.goToTaskScreen() }}
        />
      </View>
    )
  }

  render () {
    const { listsAndTasks, fetching, filters } = this.props.store
    const currentActiveFilter = _.find(filters, { active: true })
    const listAndTaskGeneral = this.hideGeneralListIfIsEmpty(listsAndTasks)
    const listsAndTasksFiltered = this.filterList(listAndTaskGeneral, currentActiveFilter.title)
    const content = fetching ? this.renderLoading() : this.renderContent(listsAndTasksFiltered, filters)
    return (
      <View style={{flexGrow: 1, backgroundColor: 'white'}}>
        <StatusBar hidden={false} backgroundColor={Colors.blueDark} />
        { content }
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
    updateTask: (listId, taskId, data, token) => dispatch(GoogleActions.updateTask(listId, taskId, data, token)),
    setFilter: filter => dispatch(GoogleActions.setFilter(filter)),
    getListOfTasks: token => dispatch(GoogleActions.listRequest(token)),
    deleteTask: (listId, taskId, token) => dispatch(GoogleActions.deleteTaskRequest(listId, taskId, token)),
    goToTaskScreen: () => dispatch(NavigationActions.navigate({ routeName: 'TaskScreen' })),
    goToSignInScreen: () => dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: 'SignInScreen' }) ]
      })
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
