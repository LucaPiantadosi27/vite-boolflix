<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
  data() {
    return {
    searchTitle: '',
    store,
    genereFilm: [],
    filmSelezionaGenere: '',
    genereSerieTv: [],
    serieSelezionaGenere: ''

    };
  },

  created() {
    this.findMovieGen();
    this.findSeriesGen();
  },


  methods: {
    searchFilms() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&query=${this.searchTitle}`)
        .then(res => {
            this.store.films = res.data.results;
            
        })
      },
    searchTvSeries() {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&query=${this.searchTitle}`)
        .then(res => {
            this.store.series = res.data.results;
        })
    },
    search() {
      this.searchFilms();
      this.searchTvSeries();
    
    },

      findMovieGen() {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&language=en-US`)
        .then(res => {
          this.genereFilm = res.data.genres;
        })
    },

    filterFilmGen(genreId) {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&with_genres=${genreId}`)
        .then(res => {
          this.store.films = res.data.results;
        })
    },

    findSeriesGen() {
      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&language=en-US`)
        .then(res => {
          this.genereSerieTv = res.data.genres;
        })
    },

    filterSeriesGen(genreId) {
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&with_genres=${genreId}`)
        .then(res => {
          this.store.series = res.data.results;
        })
      }
  }
};

</script>


<template>

<div id="search-bar">
  
    <input type="search" v-model="searchTitle" placeholder="Cerca">
    
    <select v-model="filmSelezionaGenere" @change="filterFilmGen(filmSelezionaGenere)">
      <option value="">  Genere Film</option>
      <option v-for="genreFilms in genereFilm" :value="genreFilms.id" :key="genreFilms.id">{{ genreFilms.name }}</option>
    </select>

    <select v-model="serieSelezionaGenere" @change="filterSeriesGen(serieSelezionaGenere)">
      <option value="">  Genere Serie Tv</option>
      <option v-for="genreSeries in genereSerieTv" :value="genreSeries.id" :key="genreSeries.id">{{ genreSeries.name }}</option>
    </select>
    
    
    <button class="btn" @click="search"><i class="fa-solid fa-magnifying-glass"></i> Cerca</button>
  </div>
</template>


<style lang="scss">

#search-bar {
  display: flex;
  padding-left: 5px;
  
  #search-bar.transition {
  border: solid rgba(88, 88, 88, 0.979) 0.1px;
  cursor: pointer;
  opacity: 4; 
  }
  
  input {
  width: 400px;
  
  padding: 8px 10px;
  
  }

  
  button {
    padding: 5px 5px ;
    cursor: pointer;
  
  }
  
  
}

</style>