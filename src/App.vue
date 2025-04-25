<template>
  <div class="app">
    <Navbar/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.app {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* font-family: 'Inter', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; */
  /* font-family: Helvetica, 'Avenir',  Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  /* display: flex; */
  justify-content: center;
  overflow: hidden;
  min-height: 100vh;
  scroll-behavior: auto;
  background-color: #2d3142;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
