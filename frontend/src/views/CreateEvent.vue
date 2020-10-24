<template>
    <v-form ref="form" >
        <v-container>
            <v-row>
                <v-col cols="8" >
                    <v-text-field label="Event Title" v-model="event.title" :rules="genericRules" /> 
                    <v-textarea 
                        label="Event Description"
                        v-model="event.description"
                        :rules="genericRules"
                    />
                </v-col>
                <v-col cols="4" >
                    <v-text-field 
                        label="Image Link: sorry wanted to put a lambda here" 
                        v-model="event.eventImage" 
                        :rules="genericRules" 
                    />
                    <v-text-field 
                        label="Location" 
                        v-model="event.location" 
                        :rules="genericRules" 
                    />
                    <v-text-field 
                        label="Dates: Press Enter | mm/dd/yyyy hh:mm" 
                        v-model="dateTemp" 
                        @keypress.enter="addDate" 
                    />

                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="(d, i) in event.dates" :key="`dates-${i}`" >
                            <td> {{ d.split(' ')[0] }} </td>
                            <td> {{ d.split(' ')[1] }} </td>
                            <td>$200</td>
                            <td>
                                <v-btn fab x-small @click="removeDate(i)" >
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </table>

                </v-col>
            </v-row>
        </v-container>
        <v-btn
            class="float-btn"
            fab
            dark
            small
            color="primary"
            @click="saveEvent"
        >
            <v-icon dark>
                mdi-content-save
            </v-icon>
        </v-btn>
    </v-form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    name: "CreateEvent",
    data: () => ({
        event: {
            id: 0,
            dates: [],
        },
        dateTemp: '',
        genericRules: [
            v => !!v || 'This field is required'
        ]
    }),
    methods: {
        ...mapActions('events', {
            createEvent: 'createEvent'
        }),
         ...mapMutations('SnackBarNotif', {
            notifDanger: 'notifDanger',
            notifSuccess: 'notifSuccess'
        }),
        addDate() {
            this.event.dates.push(this.dateTemp)
            this.dateTemp = ''
        },
        removeDate(index) {
            this.event.dates = this.event.dates.filter( (d, i) => i != index ) 
        },
        saveEvent() {
            if( !this.$refs.form.validate() ) {
                this.notifDanger('Please Fill In All Required Fields')
                return
            } 
            this.createEvent(this.event)
            .then( res => {
                this.notifSuccess('The Event Was Created')
                this.$router.push({ name: 'Home' })
            })
            .catch(err => {
                this.notifDanger('There was an error while saving')
            })
        }
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

.rel {
  position: relative;
}
.float-btn {
  position: fixed;
  right:    .5rem;
  bottom:   .5rem;
}
</style>
