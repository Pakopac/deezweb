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
  flex-wrap: wrap;
}
button{
    padding: 7px;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
}
button i{
    margin-right: 10px;
}
hr{
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #E3E3E3;
    margin: 1em 0;
    padding: 0; 
}
</style>
