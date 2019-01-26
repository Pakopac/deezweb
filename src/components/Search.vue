<template>
  <div class="search">
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant</p>
    <hr>

    <form>
      <div class="searchTitle">
        <span>Titre: </span>
        <input placeholder="Eminem, Armin Van Buuren, Rihanna, ..." type="text">
      </div>
      <div class="searchFilter">
        <span>Trier par:</span>
        <select>
          <option>Album</option>
          <option>Artiste</option>
          <option>Musique</option>
          <option>Les plus populaires</option>
          <option>Les mieux notés</option>
        </select>
      </div>
      <button class="btn">Go</button>
    </form>

    <hr>
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style scoped lang="scss">
  form{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1% 0 1% 10%;
  }
  .searchTitle input{
    width: 20em;
  }
  input, select{
    transition: 0.1s ease-in;
    margin-left: 15px;
    padding: 0.5em 0.9em;
    border-radius: 2px;
    border: thin solid #c0c0c0;
  }
  input:focus, select:focus{
    outline: none;
    border: thin solid #7FBCFE;  
    box-shadow: 0 0 10px #9ecaed;
  }
  select{
    cursor: pointer;
  }
  .btn {
  display: inline-block;
  padding: 0.7em 0.9em;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  border: 2px solid #007BFE;
  cursor: pointer;
  background: #007BFE
}
.btn:hover, .btn:active{
    border: 2px solid #7EBCFE;
    box-shadow: 0 0 10px #7EBCFE;
  }
</style>
