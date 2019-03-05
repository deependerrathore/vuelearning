<template>
    <v-toolbar absolute color="teal lighten-3">
        <v-toolbar-title caps>MY SHOPPING CART</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link :to="{name: 'home' }">Home</router-link>
            <router-link :to="{name: 'faq' }">FAQ</router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>
