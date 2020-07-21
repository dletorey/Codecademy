import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    name: 'Chime',
                    artist: 'Orbital',
                    album: 'Green',
                    id: 123
                },
                {
                    name: 'Open Up',
                    artist: 'Leftfield',
                    album: 'Leftism',
                    id: 456
                },
                {
                    name: 'Mmmmmm Skyscraper',
                    artist: 'Underworld',
                    album: 'dubnobasswithmyheadman',
                    id: 789
                }
            ],
            playlistName: 'Dave\'s Playlist',
            playlistTracks: [
                {
                    name: 'Remind',
                    artist: 'Orbital',
                    album: 'Brown',
                    id: 111
                },
                {
                    name: 'Song of Life',
                    artist: 'Leftfield',
                    album: 'Leftism',
                    id: 222
                },
                {
                    name: 'Cowgirl',
                    artist: 'Underworld',
                    album: 'dubnobasswithmyheadman',
                    id: 333
                }
            ]
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
    }
    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        tracks.push(track);
        this.setState({
            playlistTracks: tracks
        });
    }
    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
        this.setState({
            playlistTracks: tracks
        });
    }
    updatePlaylistName(name) {
        this.setState({
            playlistName: name
        });
    }
    savePlaylist() {
        const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist 
                            playlistName={this.state.playlistName} 
                            playlistTracks={this.state.playlistTracks} 
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave={this.savePlaylist} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;