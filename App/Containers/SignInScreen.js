import React, { Component } from 'react'
import { Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { Images } from '../Themes'
import styles from './Styles/LoginScreenStyles'

class SignIn extends Component {
  async componentDidMount () {
    setTimeout(function () {
      SplashScreen.hide()
    }, 3000)

    await GoogleSignin.configure({
      // iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
    })

    let user = GoogleSignin.currentUserAsync()
    if (user) {
      this.props.goToList()
    }
  }

  async _signIn () {
    let user = await GoogleSignin.signIn()
    console.log('USER LOGGED', user)
    console.log(this.props)
    this.props.goToList()
  }

  render () {
    return (
      <Image source={Images.background} resizeMode='cover' style={[styles.backgroundImage, styles.centered]}>
        <Image source={Images.logo} style={styles.logo} />
        <GoogleSigninButton
          style={{ width: 312, height: 56, marginTop: 60 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this._signIn.bind(this)} />
      </Image>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToList: () => dispatch(NavigationActions.navigate({ routeName: 'ListScreen' }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
