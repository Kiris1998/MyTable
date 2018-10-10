import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

let bus = new Vue()
Vue.prototype.bus = bus
