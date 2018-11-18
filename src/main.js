import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
