import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { GoogleSignin } from 'react-native-google-signin'
import ActionButton from 'react-native-action-button'

import { TasksNotFound, ListsAndTasks, FilterTasks, SignOutButton } from 'doit/App/Components/'
import { Colors } from 'doit/App/Themes/'

const responseApi = [
  {data: [{id: 1, title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,'}, {id: 2, title: 'teste 2', isChecked: true}, {id: 3, title: 'teste 3', isChecked: false}], title: 'General'},
  {data: [{id: 4, title: 'teste 4', isChecked: false}, {id: 5, title: 'teste 5', isChecked: false}], title: 'lista 2'},
  {data: [{id: 6, title: 'teste 6', isChecked: true}, {id: 7, title: 'teste 7', isChecked: false}], title: 'lista 3'},
  {data: [{}], title: ''}
]
const filters = [
  { title: 'all', active: true },
  { title: 'done', active: false },
  { title: 'undone', active: false }
]

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
    this.props.navigation.setParams({ handleSignOut: this.handleSignOut.bind(this) })
  }

  toogleCheck (id) {
  }

  render () {
    return (
      <View style={{flexGrow: 1, backgroundColor: 'white'}}>
        <StatusBar hidden={false} backgroundColor={Colors.blueDark} />

        {/* Content */}
        {
          responseApi.length > 0
          ? <ListsAndTasks data={responseApi} toogleCheck={this.toogleCheck} />
          : <TasksNotFound />
        }

        <FilterTasks filters={filters} />

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
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
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
