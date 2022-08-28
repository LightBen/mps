<template>
    <header>
        <v-toolbar app fixed :dark="true">
            <v-toolbar-title class="headline text-uppercase">
                <span>My Perek Shira</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat href="#" class="btn-auto btn-lang" style="display: none !important;">
                <v-icon>language</v-icon>
            </v-btn>
        </v-toolbar>
    </header>
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

<style src="./header.scss" lang="scss" scoped></style>
