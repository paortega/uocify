<template>
    <section class="playlist-page">   
        <b-overlay :show="show">
            <article class="row">
                <div class="col-lg-4">
                    <img :src="dataPlaylist.picture_big">
                </div>
                <div class="info-play col-lg-8">
                    <h2>{{dataPlaylist.title}}</h2>
                    <span><b>{{dataPlaylist.description}}</b></span>
                    <ul class="tracklist">
                        <li v-for="(x, index) in tracks" :key="index">
                            {{x.title}}
                        </li>
                    </ul>
                </div>
            </article>
        </b-overlay>
    </section>
</template>

<script>
// import TrackList from '@/components/Tracks/TrackList'
import api from '@/api/api'
export default {
    name: 'playlist',
    // components: { TrackList },
     data() {
        return {
            dataPlaylist: [],
            show: true,
            tracks: []
            // tracks: tracksjson.data,
            // albums: albumsjson.data,
            // artists: artistsjson.data,
        }
    },
    created() {
        this.loadPlaylist()
    },
    methods: {
        loadPlaylist(){    
            api.getPlaylist(this.$route.params.q).then(response => {
                this.dataPlaylist = response
                this.tracks = response.tracks.data
                this.show = false
            })
        }
    }
}
</script>

<style lang="scss">
    .album{
        margin-bottom: 15px;
        line-height: 1.3em;
    }

    .album-title{
        display: block;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
        font-weight: 600;     
    }

    .album-artist{
        font-size: 12px;
    }

    .album-cover{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        background: $grey-light;
        border: 1px solid $border-color;
    }

    .playlist-page{
        padding-top: 8%;
    }

    .info-play{
        padding-left: 35px !important;
    }

    .tracklist{
        padding-top: 25px;
        height: 40%;
        overflow-y: scroll;
    }
</style>
