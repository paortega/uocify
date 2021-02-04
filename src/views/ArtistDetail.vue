<template>
    <main class="page-artist">
        <loading v-if="loading"></loading>
        <div v-else class="container">
            <div class="artist-detail row">
                <img class="col-md-4 artist-detail-cover" 
                    :srcset="`${artist.picture_big}, ${artist.picture_xl} 1.5x`" 
                    :src="artist.picture_big" 
                    :alt="artist.name" 
                    loading="lazy"
                    >

                <div class="col-md-8 artist-detail-info">
                    <h1 class="main-title">{{ artist.name }}</h1>
                    <span>{{ artist.nb_fan | number }} fans</span>
                    <span>{{ artist.nb_album | number }} álbumes</span>
                </div>
            </div>

            <div class="artist-albums" v-if="albums.length">
                <h2 class="title">Álbumes destacados</h2>
                <album-list :albums="albums" />
            </div>

            <div class="artist-tracks" v-if="tracks.length">
                <h2 class="title">Canciones destacadas</h2>
                <track-list :tracks="tracks" />
            </div>
        </div>
    </main>
</template>

<script>
import TrackList from '@/components/Tracks/TrackList'
import AlbumList from '@/components/Albums/AlbumList'
import Loading from '@/components/Loading.vue'
import api from '@/api.js'

export default {
  name: 'ArtistDetail',
  components: { AlbumList, TrackList,  Loading  },
  data () {
    return {
      artist: [],
      tracks: [],
      albums: [],
      artistId: this.$route.params.id || '',
      loading: true,
    }
  },
  created () {
    this.getArtistDetail(this.artistId)
  },
  methods: {
    async getArtistDetail (id) {
      const response_artist = await api.getArtist(id)
      const response_tracks = await api.getArtistTracks(id)
      const response_albums = await api.getArtistAlbums(id)
      this.artist = response_artist
      this.tracks = response_tracks.data
      this.albums = response_albums.data
      this.loading = false
    }
  },
  metaInfo () {
    return {
      title: this.artist.name,
      meta: [
        {
          name: 'description',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus arcu, feugiat eu molestie in, finibus sit amet lorem.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" >
  .page-artist{
      .title{
          font-size: 22px;
          margin-bottom: 15px;
      }
      .artist-detail{
          margin-bottom: 20px;
      }

      .artist-detail-info{
          span{
              display: block;
          }
      }

      .artist-detail-cover{
          margin-bottom: 15px;
      }

      .artist-albums{
          margin-top: 30px;
          margin-bottom: 30px;
      }
  }
</style>