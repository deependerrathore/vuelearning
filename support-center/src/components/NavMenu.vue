<template>
    <v-toolbar dark color="blue-grey darken-1">
        <v-toolbar-title caps>MY SHOPPING CART</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat :to="{name: 'home' }" exact>Home</v-btn>
            <v-btn flat :to="{name: 'faq' }">FAQ</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
