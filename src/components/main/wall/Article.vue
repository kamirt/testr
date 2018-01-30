<template>
  <article class="article-popup">
    <div class="article-popup__content">
      <h3>{{content.title}}</h3>
      <p class="article-popup__content__description">{{content.description}}</p>
      <span>{{content.text}}</span>
    </div>
  </article>
</template>


<script>
  export default {
    props: ['content'],
    name: 'whatever',
    beforeCreate: function(){
      this.$store.dispatch('askArticles');
    },
    data: function () {
      return {
        citiesLoaded: false,
      }
    },
  };
</script>


<style scoped>
  .article-popup {
    position: fixed;
    top: 100px;
    left: calc(50% - 250px);
    background: white;
    width: 500px;
    height: auto;
    border-radius: 10px;
    z-index: 2;
  }
  .article-popup__content {
    padding: 10px;
    font-family: sans-serif;
  }
  .article-popup__content__description {
    margin-top: 0px;
    font-style: italic;
    color: grey;
  }
  @media screen and (max-width: 600px) {
    .article-popup {
      width: 320px;
      border-radius: 0;
      left: calc(50% - 160px);
    }
  }
</style>
