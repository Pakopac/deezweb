<template>
  <div class="search">
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant</p>
    <hr>

    <form @submit.prevent="getSearch">
      <div class="searchTitle">
        <span>Titre: </span>
        <input placeholder="Eminem, Armin Van Buuren, Rihanna, ..." type="text" v-model="q">
      </div>
      <div class="searchFilter">
        <span>Trier par:</span>
        <select v-model="order">
          <option value="ALBUM_ASC">Album</option>
          <option value="ARTIST_ASC">Artiste</option>
          <option value="TRACK_ASC">Musique</option>
          <option value="RANKING_DESC">Les plus populaires</option>
          <option value="RATING_DESC">Les mieux notés</option>
        </select>
      </div>
      <button class="btn">Go</button>
    </form> 

    <hr>
    <h2>Résultats</h2>
  <div class="trackList" v-if="tracks.data && tracks.data.length !== 0">
      <TrackCard :track="track" v-for="track in tracks.data" :key="track.id"/>
  </div>
  <p class="no-result" v-else-if="tracks !== ''">Aucun résultat pour cette recherche ...</p>
  </div>
</template>

<script>
import TrackCard from '@/components/TrackCard.vue'
import TrackService from '@/services/TrackService.js'

export default {
  name: 'Search',
  data(){
    return {
      tracks: '',
      q: '',
      order: 'ALBUM_ASC',
    }
  },
  components:{
    TrackCard
  },
  methods:{
      getSearch(){
        TrackService.fetchAll(this.q, this.order).then(tracks => {
          this.tracks = tracks
      })
    },
  }
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
