import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
const state = {
  articles: [],
};

const getters = {
  getArticles: state => {
      return state.articles;
  },
};

const actions = {
  askArticles({ state, commit }, article) {
    let me = this;
    axios.get('@/../data.json')
      .then(function(response){
        let data = response.data;
        me.commit('setArticles', data);
      }).catch(function(error){
        console.log(error)
      });
  }
};

const mutations = {
  setArticles(state, articles) {
      state.articles = articles;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
