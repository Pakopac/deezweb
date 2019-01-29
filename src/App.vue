<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 
}
#app > *:not(nav){
  margin: 0 3em;
}
body{
  margin: 0;
}
.no-result{
  font-size: 1.2em;
  font-weight: bold
}
.trackList {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.trackList > * {
    box-sizing: border-box;
    width: calc(94%/3);
    margin: 1%;
}
</style>
