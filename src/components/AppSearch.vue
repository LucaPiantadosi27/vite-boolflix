<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
  data() {
    return {
    searchTitle: '',
    store,
    };
  },

  methods: {
    searchFilms() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&query=${this.searchTitle}`)
        .then(res => {
            this.store.films = res.data.results;
            
        })
      },
    searchTv() {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&query=${this.searchTitle}`)
        .then(res => {
            this.store.series = res.data.results;
        })
    },
    search() {
      this.searchFilms();
      this.searchTv();
    
    
      }
  }
};
</script>


<template>

<div id="search-bar">
  
    <input type="search" v-model="searchTitle" placeholder="Cerca">
    <button class="btn" @click="search"><i class="fa-solid fa-magnifying-glass"></i> Cerca</button>
  </div>
</template>


<style lang="scss">

#search-bar {
    display: flex;
    
    #search-bar.transition {
    border: solid rgba(88, 88, 88, 0.979) 0.1px;
    cursor: pointer;
    opacity: 3;
  }
    
    input {
    width: 650px;
    padding: 5px 10px;
    padding: 10px 12px;
    
    }

    button {
        padding: 5px 10px;
        cursor: pointer;
    }

  
}

</style>