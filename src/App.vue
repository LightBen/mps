<template>
    <v-app class="he en fr">
        <div :lang="lang" :dir="ltr">
            <!-- <LanguagePicker></LanguagePicker> -->
            <Header></Header>

            <main>
                <router-view/>
            </main>
        
            <Footer></Footer>
        </div>
    </v-app>
</template>

<script>
    import LanguagePicker from '@/components/widgets/LanguagePicker'
    import Header from '@/components/header/Header'
    import Footer from '@/components/footer/Footer'

    export default {
        name: 'App',
        components: {
            LanguagePicker,
            Header,
            Footer
        },
        data () {
            return {
                lang: "he"
            }
        }
    }
</script>

<style src="./styles.scss" lang="scss"></style>
