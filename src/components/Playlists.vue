<template>
    <article @click="clickPlaylist" class="playlist col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img class="playlist-cover" :src="plays.picture_medium">
        <span class="playlist-title">{{plays.title}}</span>
    </article>
</template>

<script>
export default {
    name: 'Playlists',
    props: { 
        plays: Object,
    },
    created() {
      this.load()
  },
    methods: {
        clickPlaylist(){     
            this.$router.push({
                name: 'playlist',
                params: { q: this.plays.id },
            }).catch(() => {});
        },
        load(){
            console.log("********LOAD************")
            console.log(this.plays)
        }
    }
}
</script>

<style lang="scss">
    .playlist{
        margin-bottom: 15px;
        line-height: 1.3em;
        cursor: pointer;
    }

    .playlist:hover{
        opacity: 0.8;
    }

    .playlist-title{
        display: block;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
        font-weight: 600;     
    }

    .playlist-cover{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        background: $grey-light;
        border: 1px solid $border-color;
    }
</style>
