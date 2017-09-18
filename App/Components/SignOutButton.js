import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { Images } from 'doit/App/Themes'

const SignOutButton = ({ handleSignOut }) => {
  return (
    <TouchableOpacity onPress={() => handleSignOut()} style={styles.container}>
      <Image source={Images.signOut} style={styles.signOut} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    marginLeft: 22
  },
  signOut: {
    width: 16,
    height: 16
  }
})

SignOutButton.propTypes = {
  handleSignOut: PropTypes.func
}

export default SignOutButton
