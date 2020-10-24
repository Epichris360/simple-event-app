<template>
  <div class="rel">
    <v-container fluid class="pa-0">
      <v-row  >
        <v-col cols="9"  >
          <events-list />
        </v-col>
        <v-col cols="3" >
          <todays-highlight />
        </v-col>
      </v-row>
    </v-container>

    <router-link :to="{ name: 'createEvent' }" >
      <v-btn
        class="float-btn"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import EventsList from '@/components/EventsList'
import TodaysHighlight from '@/components/TodaysHighlight'
export default {
  components: {
    EventsList,
    TodaysHighlight
  },
}
</script>

<style lang="scss" scoped>
.rel {
  position: relative;
}
.float-btn {
  position: fixed;
  right:    .5rem;
  bottom:   .5rem;
}
</style>