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
    <button @click="addFav" v-bind:class="isFav"><i :class="iconButton"></i>{{textButton}}</button>
    </div>
  </article>
</template>

<script>
export default {
    name: 'TrackCard',
    props: ['track'],
    data() {
        return{
            Fav: true,
            allFav: []
        }
    },
    created(){
        if(localStorage.getItem(`track${this.track.id}`)){
            this.Fav = false
        }
        else{
            this.Fav = true
        }
    },
    methods:{ 
        addFav(){
            //console.log(this.track)
                if(localStorage.getItem(`track${this.track.id}`) == null){
                    localStorage.setItem(`track${this.track.id}`, JSON.stringify(this.track));
                    this.Fav = false
                }
                else{
                    localStorage.removeItem(`track${this.track.id}`);
                    this.Fav = true
                }
        },
    },
    computed:{
        isFav: function(){
            if(this.Fav == true){
                return "btnFav"
            }
            else{
                return "btnUnFav"
            }
        },
        iconButton: function(){
            if(this.Fav == true){
                return "fa fa-heart"
            }
            else{
                return "fa fa-trash"
            }
        },
        textButton: function(){
             if(this.Fav == true){
                return "Ajouter aux favoris"
            }
            else{
                return "Retirer des favoris"
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
button i{
    margin-right: 10px;
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
