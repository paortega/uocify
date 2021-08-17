import axios from 'axios'
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
export default {
    getPlaylists() {
        return axios({
            method: 'get',
            url: `${baseUrl}/chart/0/playlists`,
        })
        .then(response => response.data)
    },
    getPlaylist(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/playlist/${q}`,
        })
        .then(response => response.data)
    },
    getTracks(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/search/track?q=${q}`,
        })
        .then(response => response.data)
    }, 
    getAlbums(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/search/album?q=${q}`,
        })
        .then(response => response.data)
    },    
    getArtists(q) {
        return axios({
            method: 'get',
            url: `${baseUrl}/search/artist?q=${q}`,
        })
        .then(response => response.data)
    }

}

