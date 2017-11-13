import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
// import affdex from './assets/js/affectiva'

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  render: h => h(App)
})