import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { store } from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

import './styles/app.scss';

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC7g__CddunkjMnUljBhgQOZ0BRK-JafZE', // todo: move to .env
    libraries: 'places'
  }
})

Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
