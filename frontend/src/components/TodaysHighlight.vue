<template>
    <div>
        <h1>Today's Hightlight</h1>
        <hr>
        <v-list >
            <v-list-item
                v-for="(f, i) in featuredList"
                :key="`f-${i}`"
            >
                <v-list-item-avatar>
                    <img :src="f.eventImage" alt="">
                </v-list-item-avatar>

                <v-list-item-content>
                    <router-link :to="{ name: 'showEvent', params: { id: f.id } }" >
                        <v-list-item-title class="link" v-text="f.title" />
                        <v-list-item-subtitle class="link" v-text="f.description.substr(0,30) + '...'" />
                        <v-list-item-subtitle class="link" v-text="f.location" />
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "TodaysHightlight",
    computed: {
       ...mapState('events', {
           featuredList: 'featured'
       })
    },
    methods: {
       ...mapActions('events', {
           featuredEvents: 'featuredEvents'
       })
    },
    mounted() {
        this.featuredEvents()
    }
}
</script>

<style scoped lang="scss">
    a:visited { text-decoration: none; color:black; }
    a:hover { text-decoration: none; color:black; }
    a:focus { text-decoration: none; color:black; }
    a:hover, a:active { text-decoration: none; color:black }   
</style>