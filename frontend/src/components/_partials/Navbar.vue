<template>
    <v-app-bar
        color="purple"
        dense
        >

        <v-toolbar-title>
            <router-link :to="{ name: 'Home' }" > 
                <img class="logo-height" src="@/assets/ingeniousTravel.png" alt="">
            </router-link>
        </v-toolbar-title>

    </v-app-bar>
</template>

<style lang="scss" scoped>
.logo-height {
    height: 3rem;
}

</style>