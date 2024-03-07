<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import {store} from './store.js';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  created() {
  axios.get
    ('https://api.themoviedb.org/3/movie/540?api_key=16cf9fe0e8aeee3cfc3c7f142b6b1f36')
    .then(res => {
    this.store.films = res
    console.log(res)
  })
},
}
</script>


<template>

  <AppHeader></AppHeader>
  
  <AppMain></AppMain>

</template>


<style lang="scss">
</style>