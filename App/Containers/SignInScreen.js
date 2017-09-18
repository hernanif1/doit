import React, { Component } from 'react'
import { Image, StatusBar, Keyboard } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import { googleSigInOptions } from 'doit/App/Config/GoogleSigInConfig'
import { Images } from 'doit/App/Themes'
import GoogleActions from 'doit/App/Redux/GoogleRedux'
import styles from './Styles/LoginScreenStyles'

class SignIn extends Component {
  static navigationOptions = {
    header: null
  }

  async handleUser () {
    const user = await GoogleSignin.currentUserAsync()
    if (user) {
      this.props.setToken(user.accessToken)
      this.props.goToListScreen()
    } else {
      SplashScreen.hide()
    }
  }

  async handleSignIn () {
    let user = await GoogleSignin.signIn()
    this.props.setToken(user.accessToken)
    this.props.goToListScreen()
  }

  async componentDidMount () {
    Keyboard.dismiss()
    await GoogleSignin.configure(googleSigInOptions)
    await this.handleUser()
  }

  render () {
    return (
      <Image source={Images.background} resizeMode='cover' style={[styles.backgroundImage, styles.centered]}>
        <StatusBar hidden />
        <Image source={Images.logo} style={styles.logo} />
        <GoogleSigninButton
          style={{ width: 312, height: 56, marginTop: 60 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.handleSignIn.bind(this)} />
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
