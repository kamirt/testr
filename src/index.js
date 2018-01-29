import Vue from 'vue';
import router from './router/index.js';
import store from './store/store.js'
import App from './App.vue';

const app = new Vue({
      render: h => h(App),
      router,
      store
});

app.$mount(document.querySelector('#app'));
