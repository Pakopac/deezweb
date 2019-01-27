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
    <br><button class="btnFav"><i class="fa fa-heart"></i> Ajouter aux favoris</button>
    </div>
  </article>
</template>

<script>
export default {
    name: 'TrackCard',
    props: ['track']
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
</style>
