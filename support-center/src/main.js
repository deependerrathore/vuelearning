import Vue from 'vue';
import Vuetify from 'vuetify';
import 'babel-polyfill';
import router from './router';
import VueFetch from './plugins/fetch';
import state from './state';
import VueState from './plugins/state';
import './global-components'

Vue.use(Vuetify);
Vue.use(VueFetch,{
  baseUrl :'http://localhost:3000/',
});

Vue.use(VueState,state);

import AppLayout from './components/AppLayout.vue';

new Vue({
  el:'#app',
  data:state,
  render: h=> h(AppLayout),
  router,
  created(){
    console.log(this.$state)
  }
});