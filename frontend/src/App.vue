<template>
    <div id="app">
        <navbar />     
        <router-view/>

        <notification
            :danger="notifDanger"
            :snackbar="notifShow"
            :success="notifSuccess"
            :text="notifText"
            top
            @closing="notifClose"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import navbar from '@/components/_partials/Navbar'
import Notification from '@/components/_partials/Notification'
export default {
    components: {
        navbar,
        Notification
    },
    computed: {
        ...mapState('SnackBarNotif', {
            notifShow : 'notifShow',
            notifSuccess : 'notifSuccess',
            notifDanger : 'notifDanger',
            notifText : 'notifText'
        })
    },
    methods: {
        ...mapMutations('SnackBarNotif', {
            notifClose: 'notifClose'
        })
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
