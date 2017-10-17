// Index.andoid.js - place code for andoid

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Time Line of the App:
// 1. React Native boots up
// 2. RN decides to render 'app' to the screen
// 3. App decides to render itself, Header and AlbumList
// 4. AlbumList gets initial state of { albums[] }
// 5. AlbumList realizes its about to be rendered, calls componentWillMount
// 6. AlbumList makes HTTP request
// 7. AlbumList's render method is called
// 8. App, AlbumList, Header appear on screen
// ...
// ...
// ...
// HTTP request returns JSON data
// Request handler calls 'setState'
// AlbumList's render method is called

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );

// Render it to the device
// AppRegistry is the JS entry point to running all React Native apps.
// The string on the register should match the name of our proyect. ex:('albums').
AppRegistry.registerComponent('albums', () => App);
