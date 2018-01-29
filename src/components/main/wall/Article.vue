<template>
  <div class="article-popup">

  </div>
</template>


<script>
  export default {
    props: ['content']
    name: 'whatever',
    beforeCreate: function(){
      this.$store.dispatch('askArticles');
    },
    components: {
    },
    computed: {
      content: function(){
        return this.props.content;
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
  .article-popup {
    position: absolute;
    top: 100px;

  }
</style>
