<template>
  <div class="home">
    <div class="blockTitleHome">
      <h1>Bienvenue sur Deezweb</h1>
      <p>L'application qui permet facilement d'écouter de la musique.</p>
    </div>
    <div class="blockRandomTrack" v-if="track">
      <h2>Une musique de vos favoris au hasard:</h2>
      <TrackCard class="cardTrack" :track="track" :key="track.id"/>
      <button @click="changeTrack"><i class="fa fa-random"></i>Choisir une autre musique</button>
    </div>
  </div>
</template>

<script>
import TrackCard from '@/components/TrackCard.vue'

export default {
  name: 'Home',
  components:{
    TrackCard
  },
  data(){
    return{
      tracks: [],
      track: '',
    }
  },
  created(){
  for(var track in window.localStorage){
      if(JSON.parse(track.startsWith("track"))){
        this.tracks.push(JSON.parse(window.localStorage[track]))
      }
  }
    this.track = this.tracks[Math.floor(Math.random()*this.tracks.length)]
  },
  methods:{
    changeTrack(){
      this.tracks = [];

    for(var track in window.localStorage){
      if(JSON.parse(track.startsWith("track"))){
        this.tracks.push(JSON.parse(window.localStorage[track]))
      }
    }
    
    var randomTrack = this.tracks[Math.floor(Math.random()*this.tracks.length)]
    if(randomTrack.id != this.track.id || this.tracks.length == 1){
      this.track = randomTrack
    }
    else{
      this.changeTrack()
    }

    }
  }
}
</script>

<style scoped lang="scss">
.blockTitleHome{
  padding: 50px 30px;
  background: #E8EBEE
}
.blockTitleHome > *{
  margin: 0;
}
.blockTitleHome > p {
  margin-top: 10px 
}
.blockRandomTrack{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.trackCard{
  width: 50%
}
button{
    background: #FDFDFE;
    border: 1px solid #007BFE;
    color: #007BFE;
    margin-top: 10px;
}
button:hover{
  background: #007BFE;
  color: #FDFDFE;
}
button i{
    margin-right: 10px;
}
</style>
