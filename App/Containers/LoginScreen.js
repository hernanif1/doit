import React, { Component } from 'react'
import { Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { Images } from '../Themes'
import styles from './Styles/LoginScreenStyles'

export default class Login extends Component {
  componentDidMount () {
    setTimeout(function () {
      SplashScreen.hide()
    }, 3000)
  }

  render () {
    return (
      <Image source={Images.background} resizeMode='cover' style={[styles.backgroundImage, styles.centered]}>
        <Image source={Images.logo} style={styles.logo} />
      </Image>
    )
  }
}
