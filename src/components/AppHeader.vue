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

  // methods: {
    
  //   searchFilms() {
  //     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36&query=${this.searchTitle}`)
  //       .then(res => {
  //         this.store.films = res.data.results;
  //         console.log(res.data.results);
  //       })
  //   }
  // }
}
</script>


<template>

  <nav>

    <!-- Logo Netflix -->
    <div>    
      <img src="/public/Netflix-Logo.png" alt="logo netflix">
    </div>
    <AppSearch></AppSearch>

  </nav>

</template>


<style lang="scss">

nav {
  width: 100%;
  height: 80px;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  padding-left: 60px ;
  padding-right: 30%;
  

  
  img{
    
    height: 80px;
    width: 150px;
  }
}

</style>