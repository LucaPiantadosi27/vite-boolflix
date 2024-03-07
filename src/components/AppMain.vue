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
    
    // searchFilms() {
    //   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&query=${this.searchTitle}`)
    //     .then(res => {
    //       this.store.films = res.data.results;
    //       console.log(res.data.results);
    //     })
    // }
  }
}
</script>


<template>

<!-- Film -->
  <div id="film-container">
    <div v-for="film in store.films" :key="film.id">
      <h3>{{ film.title }}</h3>
      <img :src="'https://image.tmdb.org/t/p/w300' + film.backdrop_path" alt="Label" />
      <h2>{{ film.original_title }}</h2>
      <img :src="imageFlag(film.original_language)" alt="Flag" />
      <p>{{ film.overview }}</p>
      
      <div class="stars">
        <span v-html="starsVote(transformVoteAverage(film.vote_average))"></span>
      </div>

    </div>
  </div>


<!-- Serie TV -->

  <div id="tvSeries-container">
    <div v-for="tvSeries in store.series" :key="tvSeries.id">
      <h3>{{ tvSeries.title }}</h3>
      <img :src="'https://image.tmdb.org/t/p/w300' + tvSeries.backdrop_path" alt="Label" />
      <h2>{{ tvSeries.original_title }}</h2>
      <img :src="imageFlag(tvSeries.original_language)" alt="Flag" />
      <p>{{ tvSeries.overview }}</p>

      <div class="stars">
        <span v-html="starsVote(transformVoteAverage(tvSeries.vote_average))"></span>
      </div>
    </div>
  </div>

</template>


<style lang="scss">

#film-container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(58, 56, 53);
  
}

#tvSeries-container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(58, 56, 53);
  
}

.stars{
  font-size: 15px ;
}
</style>