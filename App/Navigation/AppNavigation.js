import { StackNavigator } from 'react-navigation'
import SignInScreen from '../Containers/SignInScreen'
import ListScreen from '../Containers/ListScreen'
import TaskScreen from '../Containers/TaskScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SignInScreen: { screen: SignInScreen },
  ListScreen: { screen: ListScreen },
  TaskScreen: { screen: TaskScreen }
}, {
  // Default config for all screens
  initialRouteName: 'SignInScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerTintColor: 'white'
  }
})

export default PrimaryNav
