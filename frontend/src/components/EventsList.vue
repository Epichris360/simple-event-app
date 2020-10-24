<template>
    <v-container fluid >
        <v-row >
            <v-col  v-for="(event, index) in orderedEvents" :key="`event-${index}`" xs="12" sm="6" >
                <v-card  >
                    <v-card-text >
                        <div class="rel" >
                            <router-link :to="{ name: 'showEvent', params: { id: event.id } }" >
                                <img :src="event.eventImage" />
                            </router-link>
                            <div class="top-bar" >
                                <div class="custom-flex" >
                                    <span>
                                        {{ 
                                            event.dates[ event.dates.length - 1 ].split(' ')[0] 
                                            + ' @ ' +  
                                            event.dates[ event.dates.length - 1 ].split(' ')[1]
                                        }}
                                    </span>
                                    <a 
                                        class="twitter-share-button" 
                                        :href="`https://twitter.com/intent/tweet?text=${ event.title } @ ${ event.dates[ event.dates.length - 1 ].split(' ')[0] }`"
                                    >
                                        <v-icon>mdi-share-variant</v-icon>
                                    </a>
                                </div>
                            </div>
                            <div class="bottom-bar" >{{ event.title }}</div>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                            <router-link :to="{ name: 'showEvent', params: { id: event.id } }" >
                            <v-btn color="blue" >
                                View
                            </v-btn>
                            </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    name: "EventsList",
    computed: {
        ...mapState('events', {
            listOfEvents: 'listOfEvents'
        }),
        orderedEvents() {
            return [...this.listOfEvents]
                .sort( (a, b) => 
                    new Date(b.dates[ b.dates.length - 1 ].split(' ')[0]) -
                    new Date(a.dates[ a.dates.length - 1 ].split(' ')[0]) 
                )
        }
    },
    methods: {
        ...mapActions('events', {
            getEvents: 'events'
        }),
         ...mapMutations('SnackBarNotif', {
            notifDanger: 'notifDanger',
        }),
    },
    mounted() {
      this.getEvents()
      .catch( err => {
          this.notifDanger('There was an error while loading the data')
      })
    }
}
</script>

<style lang="scss" scoped>
.rel {
    position: relative;
    display: block;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    img {
        width: 100%;
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .top-bar {
       position: absolute; 
       top: 0%;
       left: 0%;
       width: 100%;
       background-color: rgba(255, 255, 255, 0.7);
    }
    .bottom-bar {
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
    }
}
.custom-flex {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>