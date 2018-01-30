import Vue from 'vue';
import Router from 'vue-router';

import Main from '../components/main/View.vue';
import About from '../components/about/View.vue';
import Whatever from '../components/whatever/View.vue';
import Wall from '../components/main/wall/View.vue';
import Article from '../components/main/wall/Article.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Wall,
          name: 'wall',
        },
        {
          path: '/about',
          component: About,
          name: 'about'
        },
        {
          path: '/whatever',
          component: Whatever,
          name: 'whatever'
        }
      ]
    },
  ]
});
