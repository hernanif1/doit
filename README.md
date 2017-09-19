>## doIt! - Task Manager
> Simple todo app made in React-Native with Google SignIn and Rest Api's with Google Tasks


## Example
Do you want to see how the app looks like? [Click here](https://www.behance.net/gallery/56769943/doIt)


## Requirements
- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- ~~[Xcode](https://developer.apple.com/xcode/) for iOS development~~ (coming soon)
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.2` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation or
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or newer on your Android device to test properly

## Stack
- [React Native](https://facebook.github.io/react-native/) `0.47.x` for building native apps using react
- [Redux](http://rackt.github.io/redux/index.html) `3.6.x` a predictable state container for Javascript apps
- [Redux-Saga](https://github.com/redux-saga/redux-saga) `0.15.x` a predictable state container for Javascript apps
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [Immutable](https://facebook.github.io/immutable-js/) Immutable persistent data collections for Javascript
- [React Navigation](https://reactnavigation.org/) Navigation views that deliver 60fps animations
- [Jest tests](https://facebook.github.io/jest/) JavaScript Testing
- [React-Native Config](https://github.com/luggit/react-native-config) Environment for react-native
- [Reactotron](https://github.com/infinitered/reactotron) Inspecting your React JS and React Native apps
- [ESLint Standard](https://github.com/standard/eslint-config-standard) Rules for Javascript language
- [Loadash](https://lodash.com/) Library delivering modularity, performance & extras
- [Husky](https://github.com/typicode/husky/) Prevent bad commit, push and more

## Make the awesome
Just clone the repo
and start :
```shell
$ git clone https://github.com/hernanif1/doit
$ cd doit
$ yarn install # Install Node.js components listed in ./package.json
```


## Set the project in google firebase console
- To compile this project with google sign you need to create a project in https://console.firebase.google.com
- After click in Project Setting (gear icon)
- Add the project (package name com.doit)

In the field SHA certificate fingerprints put yout sha1 code  see how (https://developers.google.com/maps/documentation/android-api/signup)

## Get the api key to your project
1. Access your google console developer project [see how](https://console.developers.google.com/cloud-resource-manager)
2. In the search look for Task API
3. Activate It
4. In the menu click in credentials
5. Get the api key to put in the .env file bellow

## Env File
Create a .env file (in the root of the project) with the env variables
```shell
API_URL=https://www.googleapis.com/tasks/v1/
API_KEY={YOUR_GOOGLE_API_TOKEN}
```

## Build the APP in DEVELOPMENT
1. cd to the repo
2. Run Build
  * Run Genymotion or Android device [remember the dev mode](https://www.androidcentral.com/android-50-lollipop-basics-how-turn-developer-settings)
  ```shell
  $ react-native run-android
  ```

## Build the APP in PRODUCTION
Run
```shell
$ react-native run-android --variant=release
```

## Run tests
1. In your terminal just run:
```
$ jest
```


## TODO
- [ ] 100% coverage tests
- [ ] delete tasks in list screen
- [ ] ios version
- [ ] drag'n drop tasks
- [ ] offline first
- [ ] edit tasks in list screen
- [ ] list screen, insert menu more on section (remove all, done all, undone all)
- [ ] add crashlytics
- [ ] add analytics
- [x] google sigin
- [x] google task api integration
- [x] create tasks and lists
- [x] init project
- [x] ux/ui
- [x] logo
