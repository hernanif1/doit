import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
import { Colors } from 'doit/App/Themes'

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
  },
  buttonFull: {
    flexDirection: 'row',
    marginHorizontal: Metrics.marginHorizontal,
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 3,
    marginTop: 80,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2
  },
  googleIcon: {
    width: 24,
    height: 24
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: Metrics.marginHorizontal
  }
})
