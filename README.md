# Mobile Coding Challenge APP

Implemented an example React Native mobile app to build a listing page for image items. The main screen displays the list of images in grid-layout. 
Image API code is implemented in native iOS with Swift & images are fetched in RN using Native Modules.

## Screenshots

<https://github.com/rohitgarg4989/MobileCodingChallengeApp/blob/master/screenshots>

## Mock API

<https://5dbfc096e295da001400b90d.mockapi.io/codingChallenge/v1/images>

## Technologies used

1. React Native
2. Native Modules (for calling a native module method written in iOS)
3. Redux (for state management)
4. Redux-thunk (middleware for handling async actions)
5. RN Fast Image (fast & performant image wrapper with caching mechanism)
6. RN Material Dropdown (material design dropdown UI)

## Future Consideration

1. Clean up code
2. Proper styling with platform specific UI
3. API mock test

## Installation

Clone or download the repo & execute in the root project folder:

1. git clone <https://github.com/rohitgarg4989/MobileCodingChallengeApp.git>
2. cd MobileCodingChallengeApp
3. npm install
4. cd ios && pod install
5. cd ..

### Build & Run

Execute in the root project folder:

react-native start

Once completed, start the iOS Simulator and run:

react-native run-ios
