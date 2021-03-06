const clientId = '96697afbf42141368bfb62a1d85c31bd';
const redirectURI = 'http://dletorey-1st-react.surge.sh/'
let usersAccessToken;
const Spotify = {
    getAccessToken() {
        if (usersAccessToken) {
            return usersAccessToken;
        } 
        const usersAccessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (usersAccessTokenMatch && expiresInMatch) {
            usersAccessToken = usersAccessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => usersAccessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return usersAccessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            // @ts-ignore
            window.location = accessUrl;
        }
    },
    search(term) {
        const usersAccessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: {
                Authorization: `Bearer ${usersAccessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }))
        })

    },
    savePlaylist(playlistName, playlistTrackURIs) {
        if (!playlistName || !playlistTrackURIs.length) {
            return
        }
        const usersAccessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${usersAccessToken}`};
        let usersID;
        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            usersID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${usersID}/playlists`,
            {
                headers:headers,
                method: 'POST',
                body: JSON.stringify({name:playlistName})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${usersID}/playlists/${playlistID}/tracks`,
                {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: playlistTrackURIs})
                })
            })
        })
    }
};

export default Spotify;