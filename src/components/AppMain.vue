<script>
import AppSearch from '../components/AppSearch.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
  components: {
    AppSearch
  },
  data() {
    return {
      store,
    }
  },
  methods: {

    transformVoteAverage(vote) {
      return Math.ceil(vote / 2);
    },
    starsVote(vote) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= vote) {
          stars += '<i class="fas fa-star"></i>';
        } else {
          stars += '<i class="far fa-star"></i>';
        }
      }
      return stars;
    },



    imageFlag(flag) {
      switch (flag) {
        case 'en':
          return '../public/gb.png';
        case 'au':
          return '../public/au.png';
        case 'br':
          return '../public/br.png';
        case 'it':
          return '../public/it.png';
        case 'kr':
          return '../public/kr.png';
        case 'ja':
          return '../public/jp.png';
        case 'us':
          return '../public/us.png';
        default:
          return '../public/zw.png';
      }
    },
    
  }
}
</script>


<template>

<!-- Film -->
<div id="big-container">
  <h1>Film ricercati:</h1>
  
  <div class="cards-container">
      <div class="cards" v-for="film in store.films" :key="film.id">
        <div class="card-image" :style="{ backgroundImage: film.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + film.backdrop_path + ')' : 'url(https://www.acuto.org/immagini/INTERRO.jpg)' }">
          <div class="transition">
            <h3>{{ film.title }}</h3>
            <div class="item">
              <h2>{{ film.original_title }}</h2>
              <img :src="imageFlag(film.original_language)" alt="Flag" />
              <p class="overview">{{ film.overview }}</p>
              <div class="stars">
                <span v-html="starsVote(transformVoteAverage(film.vote_average))"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Serie TV -->
    <h1>Serie Tv:</h1>
    <div class="cards-container">
      <div class="cards" v-for="tvSeries in store.series" :key="tvSeries.id">
        <div class="card-image" :style="{ backgroundImage: tvSeries.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + tvSeries.backdrop_path + ')' : 'url(https://www.acuto.org/immagini/INTERRO.jpg)'}">
          <div class="transition">
            <h3>{{ tvSeries.name }}</h3>
            <div class="item">
              <h2>{{ tvSeries.original_name }}</h2>
              <img :src="imageFlag(tvSeries.original_language)" alt="Flag" />
              <p class="overview">{{ tvSeries.overview }}</p>
              <div class="stars">
                <span v-html="starsVote(transformVoteAverage(tvSeries.vote_average))"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

#big-container {
  padding: 30px;

  h3{
    margin-top: 5px;
    margin-left: 20px;
  }

.cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}
.cards {
  width: 19%;
  margin-bottom: 40px;
}

h2{
  margin-bottom: 5px;
}
.card-image {
 
  width: 100%;
  height: 380px;
  background-size: cover;
  object-fit: contain;
  background-position: center;
  position: relative;
  cursor: pointer;
}
.card-image .transition {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  opacity: 0;
  transition: opacity 0.7s ease;
}
.card-image:hover .transition {
  border: solid rgba(88, 88, 88, 0.979) 0.1px;
  opacity: 3;
}
.card-image .item {
  padding: 20px;
  font-size: 15px;
  font-family: sans-serif;
  text-align: left;
}
.card-image .item h3 {
  margin-top: 0;
}
.stars {
  font-size: 15px;
}
.overview {
  max-height: 200px;
  overflow: hidden;
}
}
</style>  