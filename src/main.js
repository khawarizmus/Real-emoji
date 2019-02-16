import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'

// import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

// @ts-ignore
const app = new Vue({
  // router,
  store,
  render: (h) => h(App)
}).$mount('#app')
