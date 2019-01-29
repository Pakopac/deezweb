<template>
  <div class="fav">
   <h1>Mes favoris</h1>
   <p>Liste de mes titres favoris</p> 
   <hr/>
   <div v-if="tracks.length != 0">
    <TrackCard v-for="track in tracks" :track="track" :key="track.id"/>
   </div>
   <p v-else class="no-result">Aucun favoris dans votre liste ...</p>
  </div>
</template>

<script>
import TrackCard from '@/components/TrackCard.vue'
export default {
  name: 'Fav',
  components:{
    TrackCard
  },
  data() {
    return{
      tracks: []
    }
  },
  created(){
    for(var track in window.localStorage){
      if(JSON.parse(track.startsWith("track"))){
        if(JSON.parse(window.localStorage[track]).isFav === 'yes'){
        this.tracks.push(JSON.parse(window.localStorage[track]))
        }
      }
    }
  },
  methods:{
    ok(){
      for(var track in window.localStorage){
      if(JSON.parse(track.startsWith("track"))){
        this.tracks.push(JSON.parse(window.localStorage[track]))
      }
    }
    console.log(this.tracks)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
