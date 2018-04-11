import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VFooter,
  VToolbar,
  VGrid,
  VMenu,
  VList,
  VBtn,
  transitions
} from 'vuetify'
import { Ripple } from 'vuetify/es5/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VToolbar,
    VGrid,
    VMenu,
    VList,
    VBtn,
    transitions
  },
  directives: {
    Ripple
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
