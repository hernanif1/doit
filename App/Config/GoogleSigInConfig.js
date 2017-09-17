import Config from 'react-native-config'

export default {
  scopes: [
    'https://www.googleapis.com/auth/tasks',
    'https://www.googleapis.com/auth/tasks.readonly'
  ],
  apiKey: Config.API_KEY,
  clientId: Config.CLIENT_ID
  // iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
}
