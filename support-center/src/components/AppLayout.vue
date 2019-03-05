<template>
    <div class="app-layout">
        <head>
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
        </head>
        <NavMenu />
        <router-view/>
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

<style lang="stylus" scoped>
.header{
    .img{
        width: 64px;
        height 64px;
    }
}
</style>
