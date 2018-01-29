<template>
    <div class="app-viewport">
      <top />
      <router-view />
    </div>
</template>


<script>
import Header from '../header/Header.vue';

export default {
  name: 'Main',
  components: {
    top: Header,
  },
  data: function () {
    return {

    }
  },
	beforeCreate: function(){

	},
  mounted: function () {
    // this.$store.subscribe(function(mutation, state){
    // });
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
