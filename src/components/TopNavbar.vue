<template>
  <b-navbar class="navbar bd-navbar  flex-md-row navbar-dark navbar-expand fixed-top" toggleable type="Dark" variant="secondary">
    <b-navbar-brand variant="Light" to="/" v-smooth-scrol><h3><b>Johns Town Foundation</b></h3></b-navbar-brand>
          <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
      
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
</div>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/#sec-1" v-smooth-scroll>Link 1</b-nav-item>
        <b-nav-item to="/#sec-2" v-smooth-scroll>Link 2</b-nav-item>
        <b-nav-item to="/#sec-3" v-smooth-scroll>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
     
  </b-navbar>
</template>    
   
<script>
  export default {
  name: "TopNavbar",
  props: {
    msg: String
  }
};
</script>
      