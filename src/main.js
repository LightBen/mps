import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Vuetify, {
    iconfont: 'mdi'
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
