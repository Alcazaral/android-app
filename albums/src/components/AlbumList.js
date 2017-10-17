import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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

class AlbumList extends Component {
  // initial state set to an empty array.
  state = { albums: [] };
  // this method is executed before the render method.
  componentWillMount() {
    // Making an HTTP request using axios
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // here we set the state to change to an array full of data
      // in this case is response.data that contains an array full of
      // objects that contains the albums info
      .then(response => this.setState({ albums: response.data }));

    // delete albums after 5 seconds (Ruben's example)
    //setTimeout(() => { this.setState({ albums: [] }); }, 5000);
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    if (this.state.albums.length === 0) {
      return <View><Text>Loading..</Text></View>;
    }

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
