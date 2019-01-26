<template>
  <nav class="navbar">
    <div class="container">
      <span class="titleNavbar">
        <router-link to="/">Deezweb</router-link>
      </span>
      <router-link to="/"><i class="fa fa-home"></i> Accueil</router-link>
      <router-link to="/search"><i class="fa fa-search"></i> Rechercher un titre</router-link>
      <router-link to="/fav"><i class="fa fa-heartbeat"></i> Mes favoris</router-link>
    </div>
  </nav>
</template>

<script>
import 'font-awesome/css/font-awesome.css'

export default {
    name: 'Navbar'
}
</script>

<style scoped lang="scss">
.navbar {
    padding-left: 3em;
    background-color: #343A40;
    color: #89969D;
    overflow: hidden;
    margin-bottom: 1em;
}
.navbar a:link,
.navbar a:visited {
    text-decoration: none;
    color: #89969D;
    display: inline-block;
    padding: 0.75em 1em 0.75em 0;
    transition: all 150ms;
    transform: scale(1);
}
.titleNavbar a:visited,
.titleNavbar a:link{
  color: #F4FAFD
}
.navbar a:hover {
    color: #F4FAFD;
    transform: scale(1.05);
}
.navbar a.router-link-exact-active {
    color: #F4FAFD;
}

.navbar a:nth-child(3) {
    margin-left: auto;
}
</style>
