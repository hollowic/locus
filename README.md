Locus
=========

## About

A mobile application for photographers to share their photos and camera settings along with the geolocation of that shot. This project was built with React Native and bootstrapped with expo

## Demo

- https://www.youtube.com/watch?v=n7ccPFVDHcU
- https://youtu.be/a2kW34n9_x0

## Features

- Visual recognition via a machine learning api
- Categorization through automatically generated tags
- Extracting geolocation and exif data from the photos you take or upload
- Interactive mapview of the photo's location with respect to your current location
- Basic authorization via sessions

## Getting Started

1. Create the `configKeys.js` by using `configKeysExample.js` as a reference: `cp configKeys.js configKeysExample.js`
   For the environment variables, you will need:
   - Amazon S3 bucket name, folder (keyPrefix), region, access key and secret key
   - API_URL address is in the form of 'https://locus-api.herokuapp.com/api/'
   - ROOT_URL points to 'https://locus-api.herokuapp.com'
2. Install Expo with `npm install -g expo-cli`
3. Install dependencies: `npm i`
4. Run the server: `npm start`

## Dependencies
   - "@react-native-community/masked-view": "0.1.5",
   - "@react-navigation/bottom-tabs": "^5.0.5",
   - "@react-navigation/native": "^5.0.5",
   - "@react-navigation/stack": "^5.0.5",
   - "axios": "^0.19.2",
   - "expo": "~36.0.0",
   - "expo-blur": "~8.0.0",
   - "expo-brightness": "~8.0.0",
   - "expo-image-manipulator": "~8.0.0",
   - "expo-image-picker": "~8.0.1",
   - "geolib": "^3.2.1",
   - "react": "~16.9.0",
   - "react-dom": "~16.9.0",
   - "react-native": "https://github.com/expo/react-native/archive/sdk-36.0.0.tar.gz",
   - "react-native-aws3": "0.0.9",
   - "react-native-elements": "^1.2.7",
   - "react-native-expo-image-cache": "^4.1.0",
   - "react-native-fs": "^2.16.4",
   - "react-native-gesture-handler": "~1.5.0",
   - "react-native-gifted-chat": "^0.13.0",
   - "react-native-maps": "0.26.1",
   - "react-native-reanimated": "~1.4.0",
   - "react-native-safe-area-context": "0.6.0",
   - "react-native-screens": "2.0.0-alpha.12",
   - "react-native-web": "~0.11.7",
   - "react-native-webview": "7.4.3",
   - "react-navigation": "^4.1.1",
   - "socket.io-client": "^2.3.0",
   - "toggle-switch-react-native": "^2.1.0"
