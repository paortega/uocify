<template>
    <article class="artist col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <router-link :to="{ name: 'Artist', params: { id: artist.id }}">
            <img class="artist-picture" :src="artist.picture_medium" :alt="artist.name">
            <span class="artist-name">{{artist.name}}</span>
            <span class="artist-fans">{{artist.nb_fan}} fans</span>
         </router-link>
    </article>
</template>

<script>

export default {
    name: 'Artist',
    props: { artist: Object },
}
</script>

<style lang="scss">
    .artist{
        margin-bottom: 15px;
        text-align: center;
        line-height: 1.3em;
        a{
          color: $text-color;
        }        
    }

    .artist-name{
        display: block;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;    
        font-weight: 600;    
    }

    .artist-fans{
        font-size: 12px;
    }

    .artist-picture{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        border-radius: 50%;
        background: $grey-light;
        border: 1px solid $border-color;
        display: block;
    }
</style>
