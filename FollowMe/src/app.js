import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDqqRLzIPEw5jJ4Ag5MBQPQlZpduGvf6gM',
    authDomain: 'followme-b4f3c.firebaseapp.com',
    databaseURL: 'https://followme-b4f3c.firebaseio.com',
    projectId: 'followme-b4f3c',
    storageBucket: 'followme-b4f3c.appspot.com',
    messagingSenderId: '769102495521'
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
