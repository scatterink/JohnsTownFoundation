<template>
  <div id="app">
    <TopNavbar/>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view />
      </div>
</template>
<script>
import TopNavbar from "./components/TopNavbar.vue";
export default {
  name: "Navbar",
  components: {
    TopNavbar
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  > nav + * {
    margin-top: 67px
  }
}

#nav {
  padding: 0 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
