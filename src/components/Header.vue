<template>
    <v-toolbar app fixed class="transparent">
        <v-toolbar-title class="headline text-uppercase">
            <span>MPS</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
            <v-icon v-text="language"></v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                //
            }
        }
    }
</script>

<style>

</style>
