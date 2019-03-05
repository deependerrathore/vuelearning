<template>
    <div>
        <NavMenu />
<v-container>
        <div>
            <v-card>
            <v-responsive>
                <v-card-text>
                    <router-view/>
                </v-card-text>
            </v-responsive>
            </v-card>
        </div>
    </v-container>
    </div>
    
</template>

<script>
import NavMenu from './NavMenu.vue';
export default{
    components:{
        NavMenu,
    },
}
</script>
<style lang="stylus">
@import '~vuetify/src/stylus/main' // Ensure you are using stylus-loader
</style>
