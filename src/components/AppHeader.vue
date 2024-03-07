<script>
import AppSearch from '../components/AppSearch.vue';

export default {
  components: {
    AppSearch
  }
}
</script>


<template>

    <nav>
        NAVBAR
    </nav>

    <AppSearch></AppSearch>

</template>


<style lang="scss">

nav {
    width: 100%;
    height: 50px;
    background-color: rgb(12, 12, 11);
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>