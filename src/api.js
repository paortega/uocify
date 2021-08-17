const proxy = 'https://cors-anywhere.herokuapp.com/' // proxy 1
// const proxy = 'https://thingproxy.freeboard.io/fetch/' // proxy 2
const apiURL = 'https://api.deezer.com'
const url = proxy + apiURL


function getPlaylists() {
  return fetch(`${url}/chart/0/playlists`, {
    method: "GET",
  })
    .then(res => res.json())
    .then(res => res )
}

function getPlaylist(id) {
    return fetch(`${url}/playlist/${id}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => res )
}

function getTracks(q) {
  return fetch(`${url}/search/track?q=${q}`, {
    method: "GET",
  })
    .then(res => res.json())
    .then(res => res )
}

function getAlbums(q) {
  return fetch(`${url}/search/album?q=${q}`, {
    method: "GET",
  })
    .then(res => res.json())
    .then(res => res )
}

function getArtists(q) {
  return fetch(`${url}/search/artist?q=${q}`, {
    method: "GET",
  })
    .then(res => res.json())
    .then(res => res )
}

function getArtist(id) {
  return fetch(`${url}/artist/${id}`, {
    method: "GET",
  })
    .then(res => res.json())
    .then(res => res )
}

function getArtistAlbums(id) {
    return fetch(`${url}/artist/${id}/albums`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => res )
}

function getArtistTracks(id) {
  return fetch(`${url}/artist/${id}/top?limit=10`, {
    method: "GET",
  })
    .then(res => res.json())
    .then(res => res )
}

export default {
  getPlaylists,
  getPlaylist,
  getTracks,
  getAlbums,
  getArtists,
  getArtist,
  getArtistAlbums,
  getArtistTracks,
}
