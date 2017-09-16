import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'

import { Images } from 'doit/App/Themes'

const SignOutButton = ({ handleSignOut }) => {
  return (
    <TouchableOpacity onPress={() => handleSignOut()} style={{ flexDirection: 'row', padding: 16, marginLeft: 22 }}>
      <Image source={Images.signOut} style={{ width: 16, height: 16 }} />
    </TouchableOpacity>
  )
}

SignOutButton.propTypes = {

}

export default SignOutButton
