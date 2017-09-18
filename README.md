#  doIt! - Task Manager

* Simple todo app made in React-Native with Google SignIn and Rest Api's with Google Tasks

## :arrow_up: Environment
* Config the android (just download the android sdk or install android studio)
* Any doubt check the firs-steps (https://facebook.github.io/react-native)
* NodeJs 6+
* React-native *Bulding projects with Native Code Target: android (https://facebook.github.io/react-native/docs/getting-started.html)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`

**Step 4:** Set the project in google firebase console
To compile this project with google sign you need to create a project in https://console.firebase.google.com
Project Setting (gear icon)
Add the project (package name com.doit)

In the field SHA certificate fingerprints put yout sha1 code  see how (https://developers.google.com/maps/documentation/android-api/signup)
**Step 5:** Get the api key to your project https://console.developers.google.com/cloud-resource-manager
Access your project
In the search look for Task API
Activate It
In the menu click in credentials
Get the api key to put in the .env file bellow

**Step 6:** Create a .env file (in the root of the project) with the env variables
```
API_URL=https://www.googleapis.com/tasks/v1/
API_KEY={YOUR_GOOGLE_API_TOKEN}
```

## :arrow_forward: How to Run App
1. cd to the repo
2. Run Build for either OS
  * for iOS (comming soon)
  * for Android
    * Run Genymotion or plugin Android device
    * run `react-native run-android`


## :no_entry_sign: Standard Compliant
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.


**To Lint on Commit**
This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.


**Bypass Lint**
If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.


**Understanding Linting Errors**
The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).


