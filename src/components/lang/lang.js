import Vue from 'vue'
import VueI18n from 'vue-i18n'

let he = require('./he.json');
let fr = require('./fr.json');
let en = require('./en.json');


Vue.use(VueI18n)

const locale = 'en'

const messages = {
    en,
    he,
    fr
}

const i18n = new VueI18n({
    locale,
    fallbackLocale:en,
    messages
})

export default i18n
