let usersAccessToken;
const Spotify = {
    getAccessToken() {
        if (usersAccessToken) {
            return usersAccessToken;
        }
    }
};

export default Spotify;