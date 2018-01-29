<template>
  <header class="test-header">
    <nav class="test-header__navbar">
      <div class="navbar__logo">
          <router-link class="navbar__logo__content" :to="{name: 'wall'}">HOME</router-link>
      </div>
      <div class="navbar__menu">
        <router-link class="navbar__menu__item" :to="{name: 'about'}">About</router-link>
        <router-link class="navbar__menu__item" :to="{name: 'whatever'}">Whatever</router-link>
      </div>
    </nav>


  </header>
</template>


<script>
  export default {
    name: 'testheader',
    components: {
    },
  };
</script>


<style scoped>
  .test-header {
    background: #7c6f94;
  }
  .test-header__navbar {
    padding: 20px;
  }
  .navbar__logo {
    display: inline-block;
  }
  .navbar__logo__content {
    text-decoration: none;
    font-size: 20px;
    color: white;
    font-weight: 800;
  }
  .navbar__menu {
    display: inline-block;
    padding: 0 0 0 10px;
  }
  .navbar__menu__item {
    margin-left: 10px;
    color: #ffe97f;
  }
  .navbar__menu__item:hover {
    color: #f7d639;
  }
  .navbar__menu__item:active {
    color: #ffe97f;
  }
  @media screen and (max-width: 420px) {
    .test-header__navbar {
      padding: 7px;
    }
    .navbar__logo__content {
      font-size: 16px;
    }
    .navbar__menu__item {
      font-size: 10px;
    }
  }
</style>
