<template>
  <div class="content-body">
    <section class="test-wall">
        <div
          v-for="article in articles"
          @click="articleToggle(article)"
          class="test-wall__item"
          :atype="article.type">
          <div
            onselectstart="return false"
            class="test-wall__item__content">
            <h3 class="content__header">{{ article.title }}</h3>
            <p class="content__description">{{ article.description }}</p>
          </div>
        </div>
    </section>
    <test-article v-bind:content="chosenArticle" v-if="showArticle" />
    <div class="shadow" v-show="showArticle" @click="articleToggle">&nbsp;</div>
  </div>
</template>


<script>
  import Article from './Article.vue'
  export default {
    name: 'whatever',
    beforeCreate: function(){
      this.$store.dispatch('askArticles');
    },
    components: {
      testArticle: Article
    },
    computed: {
      articles: function(){
        return this.$store.getters.getArticles;
      },
    },
    data: function () {
      return {
        showArticle: false,
        chosenArticle: {}
      }
    },
    methods: {
      articleToggle: function (article) {
        this.showArticle = !this.showArticle;
        this.chosenArticle = article;
      }
    }
  };
</script>


<style scoped>
  .content-wall {
    width: 100%;
  }
  .test-wall {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    margin-top: 20px;
  }
  .test-wall__item {
    height: 200px;
    background-size: cover;
    display: inline-block;
    position: relative;
    margin: 0 0.5% 0.5% 0.5%;
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }
  .test-wall__item:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #444444;
    opacity: .5;
    border-radius: 3px;
  }
  .test-wall__item[atype~=normal] {
    background: #000000 url('https://placebear.com/350/200') no-repeat center center;
    width: 32.3%;
  }
  .test-wall__item[atype~=double] {
    background: #000000 url('https://placebear.com/700/200') no-repeat center center;
    width: 65.65%;
  }
  .test-wall__item__content {
    position: absolute;
    font-family: sans-serif;
  }
  .content__header {
    margin: 0;
    padding: 5%;
  }
  .content__description {
    padding: 0 5%;
    margin: 0;
    color: #f4d68b;
  }
  .shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #000000;
    opacity: 0.6;
  }

  @media screen and (max-width: 1024px) {
    .test-wall__item {
      margin: 0 1% 1% 1%;
    }
    .test-wall__item[atype~=normal] {
      background: #000000 url('https://placebear.com/500/200') no-repeat center center;
      width: 48%;
    }
    .test-wall__item[atype~=double] {
      background: #000000 url('https://placebear.com/1024/200') no-repeat center center;
      width: 98%;
    }
  }
  @media screen and (max-width: 479px) {
    .test-wall__item {
      margin: 0 1% 1% 1%;
    }
    .test-wall__item[atype~=normal] {
      background: #000000 url('https://placebear.com/480/200') no-repeat center center;
      width: 98%;
    }
    .test-wall__item[atype~=double] {
      background: #000000 url('https://placebear.com/480/200') no-repeat center center;
      width: 98%;
    }
  }
</style>
