# RN-Autocomplete-Map

React Native (and Expo) single page app for creating a map using Google's Place Autocomplete API.

## Tech Stack:

**Framework:** React Native  
**State Management:** Redux  
**Asynchronous Flow Management:** Redux Saga  
**UI Library:** Ant Design for React Native  

## How to use this repo:-

#### After pulling from this repo:

This project utilizes yarn instead of npm (although node is still required), as its package manager. Yarn was developed by Facebook, and they've managed to track down some of the problems that npm was initially experiencing and developed their own faster, more efficient package manager, hence the usage for the project's dependency.

Firstly install yarn by running: `npm install -g yarn`

Try to run it with (with yarn installed in your local directory):

`yarn install`

After it is done, all the packages should be created inside a new folder called _node_modules_.

When installing new packages, in order for Expo to check for versions of said packages that are compatible with Expo, it is recommended to run

`npx expo install [name_of_package]`

## Running the app:

This app is an Expo managed workflow app. In order to run it, you will need to have Expo Go installed on your device/simulator.

1. Run the command: `yarn start`
   Make sure to run the app using 'Expo Go' and not 'development build' (as a development build has not yet been created). You can switch to running on 'Expo Go' by pressing `s` after starting the server (this may not be applicable to you, in which case you may ignore).

3. Run on device or simulator  
   Device: After starting the server, scan the QR using your phone's camera/QR Scanner and the app will open up on Expo Go.
   Simulator: After starting the server, press `i` or `a` to run the app on an iOS Simulator or an Android Emulator, respectively.

## Notes\*:

- Warnings that appear at the bottom of the screen can be ignored as they are related to the use of deprecated class components within installed packages.
- Normally, the '.env' file would be placed within the '.gitignore' file as it contains sensitive information (i.e. secrets, api keys, etc) but for the purpose of this project, it has been made available to allow for testers to access the Google Places API straight out of the box (it will be hidden after some time)
