<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- Add this line for router navigation or other components -->
    <router-view></router-view>  <!-- This renders the matched route's component -->
  </div>
</template>

<script>




export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
