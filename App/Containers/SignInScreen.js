import React, { Component } from 'react'
import { Image, StatusBar, Keyboard, TouchableOpacity, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import GoogleSignIn from 'react-native-google-sign-in'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import googleSigInOptions from 'doit/App/Config/GoogleSigInConfig'
import { Images } from 'doit/App/Themes'
import GoogleActions from 'doit/App/Redux/GoogleRedux'
import styles from './Styles/LoginScreenStyles'

class SignIn extends Component {
  static navigationOptions = {
    header: null
  }

  async handleSignIn () {
    await GoogleSignIn.configure(googleSigInOptions)
    let user = await GoogleSignIn.signInPromise()
    this.props.setToken(user.accessToken)
    this.props.goToListScreen()
  }

  async componentDidMount () {
    Keyboard.dismiss()
    await this.handleSignIn()
  }

  render () {
    return (
      <Image source={Images.background} resizeMode='cover' style={[styles.backgroundImage, styles.centered]}>
        <StatusBar hidden />
        <Image source={Images.logo} style={styles.logo} />
        <TouchableOpacity style={styles.buttonFull} onPress={() => this.handleSignIn()}>
          <View style={styles.buttonContainer}>
            <Image source={Images.google} style={[styles.googleIcon]} />
            <Text style={styles.signInText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </Image>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: token => dispatch(GoogleActions.setToken(token)),
    goToListScreen: () => dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: 'ListScreen' }) ]
      })
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
