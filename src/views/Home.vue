<template>
    <main class="page-home">
        
        <div class="container">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">¿En busca de música?</h1>
            <!-- <b-overlay :show="show" rounded="sm"> -->
                <section class="playlists row">
                    <Playlists
                        v-for="plays in dataPlaylists"
                        :key="plays.id"
                        :plays="plays"
                    />
                </section>
             <!-- </b-overlay> -->
        </div>
    </main>
</template>

<script>
import Playlists from '@/components/Playlists.vue'
import api from '@/api/api'

export default {
    name:'Home',
    data() {
        return {
            dataPlaylists: [],
            show: true
        }
    },
    created() {
        this.loadPlaylists()
    },
    components:{Playlists},
    props: { Playlists: Array },
    methods: {
        loadPlaylists(){     
            api.getPlaylists().then(response => {
                this.dataPlaylists = response.data
                this.show = false
            })
        }
    }
}
</script>


<style lang="scss">
    .page-home{
        text-align: center;
        padding-left:30px;
        padding-right:30px;

        .logo{
            width: 200px;
            margin-top: 35px;
            margin-bottom: 35px;
        }

        .container-thin{
            max-width: 600px;
        }
    }
    .playlists{
        padding-top: 20px;
    }
</style>