<template>
    <v-app class="he en">
        <Header></Header>

        <main>
            <router-view/>
        </main>
    
        <Footer></Footer>
    </v-app>
</template>

<script>
    import Header from '@/components/header/Header'
    import Footer from '@/components/footer/Footer'

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

<style src="./styles.scss" lang="scss"></style>
