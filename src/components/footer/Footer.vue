<template>
    <v-footer fixed height="auto" dark style="display: none !important;">
        <v-card class="flex" flat tile>
            <v-card-title class="card-title">
                <!-- <v-select :items="chapters" label="Chapters"></v-select> -->
                Choose chapter (soon)
                <v-spacer></v-spacer>
                <!-- &copy;2018 — <span>MPS</span>
                <v-spacer></v-spacer> -->
                <v-btn flat href="#" class="btn-auto btn-lang">
                    <v-icon>remove_red_eye</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                chapters: ['Foo', 'Bar', 'Fizz', 'Buzz']
            }
        }
    }
</script>

<style src="./footer.scss" lang="scss" scoped></style>
