<template>
  <section class="test-wall">
      <div
        v-for="article in articles"
        class="test-wall__item" :atype="article.type">
        <div class="test-wall__item__content">
          {{ article.title }}
          {{ article.description }}
        </div>
      </div>
    <router-view />
  </section>
</template>


<script>
  export default {
    name: 'whatever',
    beforeCreate: function(){
      this.$store.dispatch('askArticles');
    },
    components: {
    },
    computed: {
      articles: function(){
        return this.$store.getters.getArticles;
      },
    },
    data: function () {
      return {
        citiesLoaded: false,
      }
    },
  };
</script>


<style scoped>
  .test-wall {
    width: 90%;
    margin: auto;
  }
  .test-wall__item {
    height: 100px;
    background: url('https://placebear.com/500/300') no-repeat;
    background-size: cover;
    display: inline-block;
    position: relative;
  }
  .test-wall__item[atype~=normal] {
    width: 30%;
    margin: 1%;
  }
  .test-wall__item[atype~=dual] {
    width: 62%;
    margin: 1%;
  }
  .test-wall__item__content {
    position: absolute;
  }
</style>
