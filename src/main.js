// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';
import { createProvider } from './vue-apollo'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  store,
  // apolloProvider: createProvider(),
  template: '<App/>'
});

// Sync vue-router's current $route as part of vuex store's state.
const unsync = sync(store, router); // done. Returns an unsync callback fn
