<template>
    <v-container fluid >
        <v-row>
            <v-col cols="8" >
                <h1>{{ event.title }}</h1>
                <h5>{{ event.location }}</h5>
                <p v-html="event.description" />
            </v-col>
            <v-col col="4" >
                <img class="img-size" :src="event.eventImage" alt="event picture">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Price</th>
                    </tr>
                    <tr v-for="(d, i) in event.dates" :key="`dates-${i}`" >
                        <td> {{ d.split(' ')[0] }} </td>
                        <td> {{ d.split(' ')[1] }} </td>
                        <td>$200</td>
                    </tr>
                </table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    name: "ShowEvent",
    data: () => ({
        event: {},
    }),
    methods: {
        ...mapActions('events', {
            eventById: 'eventById'
        }),
         ...mapMutations('SnackBarNotif', {
            notifDanger: 'notifDanger',
        }),
    },
    mounted() {
        this.eventById(this.$route.params.id) 
        .then( res => {
            this.event = res.data.event
        })
        .catch(err => {
            this.notifDanger('There was an error while loading the data')
        })
    }
}
</script>

<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.img-size {
    width: 25rem;
}
</style>