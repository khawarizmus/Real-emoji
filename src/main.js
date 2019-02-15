import Vue from 'vue'
import App from './App.vue'

// import router from './router'
// import store from './store'
import './registerServiceWorker'

import './plugins/element.js'

Vue.config.productionTip = false

// @ts-ignore
const app = new Vue({
  // router,
  // store,
  render: (h) => h(App)
}).$mount('#app')
