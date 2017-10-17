import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDla6WAmI2a1hT0wMv7z5U6QjZUv6d-Drc',
      authDomain: 'authentication-f463b.firebaseapp.com',
      databaseURL: 'https://authentication-f463b.firebaseio.com',
      projectId: 'authentication-f463b',
      storageBucket: 'authentication-f463b.appspot.com',
      messagingSenderId: '1013392780106'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
