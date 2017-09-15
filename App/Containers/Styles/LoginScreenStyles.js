import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
