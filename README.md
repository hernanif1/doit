>## doIt! - Task Manager
> Simple todo app made in React-Native with Google SignIn and Rest Api's with Google Tasks

## Requirements
- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- ~~[Xcode](https://developer.apple.com/xcode/) for iOS development (coming soon)~~
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.2` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation or
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or newer on your Android device to test properly


## Make the awesome
Just clone the repo
and start :
```shell
$ git clone https://github.com/hernanif1/doit
$ cd doit
$ yarn install                         # Install Node.js components listed in ./package.json
```


## Set the project in google firebase console
To compile this project with google sign you need to create a project in https://console.firebase.google.com
After click in Project Setting (gear icon)
Add the project (package name com.doit)

In the field SHA certificate fingerprints put yout sha1 code  see how (https://developers.google.com/maps/documentation/android-api/signup)

## Get the api key to your project [see how](https://console.developers.google.com/cloud-resource-manager)
1. Access your project
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

## Build the Android APP
1. cd to the repo
2. Run Build for either OS
  * ~~for iOS~~ (coming soon)
  * for Android
    * Run Genymotion or Android device
    * run `react-native run-android`


## Run tests
1. In your terminal just run:
```
$ jest
```
