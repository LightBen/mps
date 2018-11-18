<template>
    <v-app>
        <Header></Header>

        <v-content class="pa-0">
            <router-view/>
        </v-content>
    
        <Footer></Footer>
    </v-app>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        data () {
            return {
                //
            }
        }
    }
</script>
