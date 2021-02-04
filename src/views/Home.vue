<template>
    <main class="page-home">
        <div class="container">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">¿En busca de música?</h1>
            <p class="lorem-textum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus consectetur ipsum in imperdiet ultrices. </p>
        
            <div class="main-content">
                <loading v-if="loading"></loading>
                <playlists v-else :playlists="playlists" />
            </div>        
        </div>
    </main>
</template>

<script>
    import api from '@/api'
    import Playlists from '@/components/Playlists/PlaylistList'
    import Loading from '@/components/Loading.vue'

    export default {
        name:'Home',
        components: { Playlists, Loading },
        data () {
            return {
                playlists: [],
                loading: true,
            }
        },
        created () {
            this.loadPlaylists()
        },
        methods: {
            async loadPlaylists () {
                const response = await api.getPlaylists()
                this.playlists = response.data
                this.loading = false
            }
        },        
        metaInfo: {
            title: 'Inicio',
            meta: [
                {
                    name: 'description',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus arcu, feugiat eu molestie in, finibus sit amet lorem.'
                }
            ]
        } 
    }
</script>


<style lang="scss">
    .page-home{
        text-align: center;
        padding-left:30px;
        padding-right:30px;

        .logo{
            width: 150px;
            margin-top: 35px;
            margin-bottom: 30px;
        }

        .main-content{
            margin-top: 35px;
        }
    }
</style>