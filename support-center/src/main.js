import Vue from 'vue';
import Vuetify from 'vuetify';
import 'babel-polyfill';
import router from './router';
import VueFetch from './plugins/fetch';

Vue.use(Vuetify);
Vue.use(VueFetch,{
  baseUrl :'http://localhost:3000/',
});

import AppLayout from './components/AppLayout.vue';

new Vue({
  el:'#app',
  render: h=> h(AppLayout),
  router
});