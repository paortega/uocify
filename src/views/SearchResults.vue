<template>
    <main class="page-search">
        <h1 class="main-title">Resultados de <span>{{query}}</span></h1>
        <h5 v-if="!tracksTotal && !show" class="alert"><b>No hay resultados para tu busqueda</b></h5>
        <b-overlay :show="show" rounded="sm">
        <b-tabs v-if="tracksTotal || albumsTotal || artistsTotal">
            <b-tab id="tabAll" title="Todo" active>
                <h2 class="title">Canciones <fa-icon icon="chevron-right" class="icon" /></h2>
                <loading v-if="loadingTracks"></loading>
                <track-list v-else-if="tracks.length" :tracks="tracks.slice(0,6)" />
                <span v-else class="no-results">{{ noResultsTracks }}</span>

                <h2 class="title">Álbumes <fa-icon icon="chevron-right" class="icon" /></h2>
                <loading v-if="loadingAlbums"></loading>
                <album-list v-else-if="albums.length" :albums="albums.slice(0,6)" />
                <span v-else class="no-results">{{ noResultsAlbums }}</span>

                <h2 @click="clickArtist" class="title">Artistas <fa-icon icon="chevron-right" class="icon" /></h2>
                <artist-list @click="clickArtist" :artists="artists.slice(0,6)" />                

            </b-tab>            
            <b-tab id="tabTracks" title="Canciones">
                <h2 class="title">{{tracksTotal}} canciones</h2>
                <loading v-if="loadingTracks"></loading>
                <track-list v-else-if="tracks.length"  :tracks="tracks" />
                <span v-else class="no-results">{{ noResultsTracks }}</span>
            </b-tab>
            <b-tab id="tabAlbums" title="Álbumes">
                <h2 class="title">{{albumsTotal}} álbumes</h2>
                <loading v-if="loadingAlbums"></loading>
                <album-list v-else-if="albums.length" :albums="albums" />
                <span v-else class="no-results">{{ noResultsAlbums }}</span>
            </b-tab>            
            <b-tab id="tabArtists" title="Artistas">
                <h2 class="title">{{artistsTotal}} artistas</h2>
                <artist-list @click="clickArtist" :artists="artists" />
            </b-tab>
        </b-tabs>
        </b-overlay>
    </main>
</template>

<script>

import TrackList from '@/components/Tracks/TrackList'
import AlbumList from '@/components/Albums/AlbumList'
import ArtistList from '@/components/Artists/ArtistList'
import api from '@/api/api'

export default {
    name:'SearchResults',
    components:{ AlbumList, ArtistList, TrackList, Loading },
    data(){
        return{
            tracks: [],
            albums: [],
            artists: [],
            tracksTotal: 0,
            albumsTotal: 0,
            artistsTotal: 0,
            query: this.$route.params.q || '',
            show: true
        }
    },
    created() {
        this.search()
        this.updateTracks()
        this.updateAlbums()
        this.updateArtists()
    },    
    created(){
        this.search()
    },    
    methods: {
        search(){       
            this.updateTracks()
            this.updateAlbums()
            this.updateArtists()
        },
        updateTracks() {
            api.getTracks(this.query).then(response => {
                    this.tracks = response.data;
                    this.loadingTracks = false;
                    this.tracksTotal = response.total;

                    if (Object.keys(this.tracks).length === 0) 
                        this.noResultsTracks = 'No se ha encontrado ninguna canción que coincida con la búsqueda.'
                })
                .catch(error => console.log(error))
        },      
        updateAlbums() {
            api.getAlbums(this.query).then(response => {
                    this.albums = response.data;
                    this.albumsTotal = response.total;
                    this.loadingAlbums = false;

                    if (Object.keys(this.tracks).length === 0) 
                        this.noResultsAlbums = 'No se ha encontrado ningún álbum que coincida con la búsqueda.'                    
                })
                .catch(error => console.log(error))
        },    
        updateArtists() {
            api.getArtists(this.query).then(response => {
                    this.artists = response.data;
                    this.artistsTotal = response.total;
                    this.loadingArtists = false;

                    if (Object.keys(this.tracks).length === 0) 
                        this.noResultsArtists = 'No se ha encontrado ningún artista que coincida con la búsqueda.'                    
                })
                .catch(error => console.log(error))
        },        
    },    
    watch: {
        '$route.params.q': function (q) {
            this.query = q
        },
        query(){
            this.updateTracks()
            this.updateAlbums()
            this.updateArtists()
        }
    },
    methods: {
        search(){
            // vamos a la página de resultados pasando el valor de 'query' por parámetro
            this.$router.push({
                name: 'search',
                params: { q: this.query },
            }).catch(() => {});
            if (this.query == ""){
                this.show = false
            }
        },
        updateTracks(){
            api.getTracks(this.query).then(response => {
                this.tracks = response.data
                this.tracksTotal = response.data.length
                this.show = false
            })
        },
        updateAlbums(){
            api.getAlbums(this.query).then(response => {
                this.albums = response.data
                this.albumsTotal = response.data.length
                this.show = false
            })
        },
        updateArtists(){
            api.getArtists(this.query).then(response => {
                this.artists = response.data
                this.artistsTotal = response.data.length
                this.show = false
            })
        },
        clickArtist(){
            alert("EYYAA")
            this.$router.push({
                name: 'artist',
                params: { q: this.query },
            }).catch(() => {});
        }
    } 
}
</script>


<style lang="scss" >

    .page-search{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;

            span{
                color: $grey-label;
            }
        }

        .no-results{
            display: block;
            margin-bottom: 30px;
        }

        .tabs{
            background: white;
            flex: 1;
            height: 100%;
        }

        #tabAll{
            .title{
                font-size: 18px;

                .icon{
                    font-size: 14px;
                    margin-left: 3px;
                }
            }

            .track-list{
                margin-bottom: 30px;
                thead{
                    display: none;
                }
            }

            section{
                margin-bottom: 30px;
            }
        }

        .alert{
            color: red;
        }
    }


</style>