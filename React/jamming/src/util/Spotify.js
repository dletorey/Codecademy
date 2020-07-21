const clientId = '96697afbf42141368bfb62a1d85c31bd';
const redirectURI = 'http://localhost:3000/'
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
            window.location = accessUrl;
        }
    }
};

export default Spotify;