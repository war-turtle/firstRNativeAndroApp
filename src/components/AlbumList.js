import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component{
  state = { albums:[] };

  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums',{
      method:'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return this.setState({albums:responseJson})
    });
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render(){
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
