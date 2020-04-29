import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import alertcmp from './components/Alert.vue';
import successcmp from './components/Success.vue';

Vue.config.productionTip = false
Vue.component('app-alert', alertcmp)
Vue.component('app-success', successcmp)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
