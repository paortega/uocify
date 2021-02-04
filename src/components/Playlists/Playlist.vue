<template>

  <article class="playlist col">
    <router-link :to="{ name: 'Playlist', params: { id: playlist.id }}">
      <img class="playlist-cover" :srcset="`${playlist.picture_big}, ${playlist.picture_xl} 1.5x`" :src="playlist.picture_big" :alt="playlist.title" loading="lazy">
      <span class="playlist-title">{{playlist.title}}</span>
      <span class="playlist-description">{{playlist.nb_tracks | number }} canciones</span>
    </router-link>
  </article>

</template>

<script>
export default {
  name: 'Playlist',
  props: {
    playlist: Object
  }
}
</script>
<style lang="scss">
    .playlist{
        margin-bottom: 15px;
        line-height: 1.3em;

        a{
          color: $text-color;
        }
    }

    .playlist-title{
        display: block;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
        font-weight: 600;     
        color: black;
    }

    .playlist-description{
        font-size: 12px;
    }

    .playlist-cover{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        background: $grey-light;
        border: 1px solid $border-color;
    }
</style>