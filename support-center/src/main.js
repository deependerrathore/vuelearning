import Vue from 'vue';
import Vuetify from 'vuetify';
import 'babel-polyfill';
import router from './router';

Vue.use(Vuetify);

import AppLayout from './components/AppLayout.vue';

new Vue({
  el:'#app',
  render: h=> h(AppLayout),
  router
});