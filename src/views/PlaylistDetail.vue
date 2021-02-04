<template>
    <main class="page-playlist">
        <loading v-if="loading"></loading>
        <div v-else class="container">
            <div class="playlist-detail row">
                <img class="col-md-4 playlist-detail-cover" 
                    :srcset="`${playlist.picture_big}, ${playlist.picture_xl} 1.5x`" 
                    :src="playlist.picture_big" 
                    :alt="playlist.title" 
                    loading="lazy"
                    >
                <div class="col-md-8 playlist-detail-info">
                    <h1 class="main-title">{{ playlist.title }}</h1>
                    <p>{{ playlist.description }}</p>
                </div>
            </div>

            <track-list :tracks="tracks" v-if="tracks.length" />
        </div>
    </main>
</template>

<script>
import TrackList from '@/components/Tracks/TrackList'
import Loading from '@/components/Loading.vue'
import api from '@/api.js'

export default {
  name: 'PlaylistDetail',
  components: {  TrackList, Loading },
  data () {
    return {
      playlist: [],
      tracks: [],
      playlistId: this.$route.params.id || '',
      loading: true
    }
  },
  created () {
    this.getPlaylistDetail(this.playlistId)
  },
  methods: {
    async getPlaylistDetail(id) {
      const res = await api.getPlaylist(id)
      this.playlist = res
      this.tracks = res.tracks.data
      this.loading = false;
    }
  },
  metaInfo () {
    return {
      title: this.playlist.title,
      meta: [
        {
          name: 'description',
          content: this.playlist.description
        }
      ]
    }
  }
}
</script>
<style lang="scss" >
  .page-playlist{
      .playlist-detail{
          margin-bottom: 20px;
      }

      .playlist-detail-cover{
          margin-bottom: 15px;
      }
  }
</style>