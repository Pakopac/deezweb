<template>
  <article class="track-card">
    <div class="flex">
        <figure>
            <img :src="track.artist.picture" :alt="track.artist.name">
        </figure>
        <div>
            <h1>{{track.title}}</h1>
            <p>{{track.artist.name}}/{{track.album.title}}</p>
        </div>
    </div>
    <div style="display:block">
    <audio controls :src="track.preview"></audio>
    <br>
    <button @click="addFav" v-bind:class="isFav"><i class="fa fa-heart"></i> Ajouter aux favoris</button>
    </div>
  </article>
</template>

<script>
export default {
    name: 'TrackCard',
    props: ['track'],
    data() {
        return{
            Fav: true
        }
    },
    created(){
        if(localStorage.getItem(`track${this.track.id}`)){
            var track = localStorage.getItem(`track${this.track.id}`)
            if(JSON.parse(track).isFav === 'yes'){
                this.Fav = false
            }
        }
    },
    methods:{ 
        addFav(){
                if(this.track.isFav === 'yes'){
                    this.Fav = true
                    this.track.isFav = 'no';
                }
                else{
                    this.track.isFav = 'yes';
                    this.Fav = false
                }
                localStorage.setItem(`track${this.track.id}`, JSON.stringify(this.track));
        },
    },
    computed:{
        isFav: function(){
            if(this.Fav === true){
                return "btnFav"
            }
            else{
                return "btnUnFav"
            }
        }
    }
}
</script>

<style scoped lang="scss">
.track-card{
  box-shadow: 0 0 15px #c0c0c0;
    border-radius: 2px;
    background-color: #fafafa;
    overflow: auto;
    text-align: left;
    padding: 0.25em 1.25em 0.25em 0;
    align-items: stretch;
}
.flex{
    display: flex;
}

.track-card > figure {
    margin: 0.25em;
    text-align: center;
    display: flex;
    align-items: center;
}

img {
    display: block;
    border-radius: 300px;
    max-width: 70px;
}

.track-card > div {
    margin: 0.25em;
    font-size: 0.8em;
    line-height: 1.6em;
}
audio{
    background: white;
    border-radius:30px
}
button{
    padding: 7px;
    border-radius: 5px;
    transition: 0.5s;
}
.btnFav{
    color: red;
    background: transparent;
    border: 1px solid red;
}
.btnFav:hover{
    color: white;
    background: red;
    cursor: pointer;
}
.btnUnFav{
    color: white;
    background: red
}
.btnUnFav:hover{
    cursor: pointer;
    color: red;
    background: white
}

</style>
