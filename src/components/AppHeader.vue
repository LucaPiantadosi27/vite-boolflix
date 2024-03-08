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
      showDropdown: false,
      userImage: "/public/user-green.png"
    }
  },

  methods: {
    changeUserIcon(image) {
      this.userImage = image;
    }
  }
}
</script>


<template>

  <nav>

    <!-- Logo Netflix -->
    <div id="left">    
      <img src="/public/Netflix-Logo.png" alt="logo netflix">

      <div id="links">
          <ul>
            <li><a href="#">Serie Tv</a></li>
            <li><a href="#">Film</a></li>
            <li><a href="#">Originali</a></li>
            <li><a href="#">Aggiunti di recente</a></li>
            <li><a href="#">La mia lista</a></li>

        </ul>
      </div>
    </div>
    <div id="mid">
    <AppSearch></AppSearch>
    </div>

    <div id="right">
    <div id="user" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
      <div id="profile">
      <img :src="userImage" alt="">
      </div> 
      
        <i class="fa-solid fa-chevron-down"></i>
        <div v-if="showDropdown" id="dropdown-menu">
        
          <div @click="changeUserIcon('/public/user-green.png')">Green</div>
          <div @click="changeUserIcon('/public/user-red.jpg')">Red</div>
          <div @click="changeUserIcon('/public/user-blue.png')">Blue</div>
        
        </div>
      </div> 

      <!-- bell -->
      <i class="fa-solid fa-bell">
        <div id="notifiche">
          10
        </div>
      </i>
      </div>
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
  padding-right: 50px;
  
  

  #left {
  display: flex;
  align-items: center;
  
}

#mid{
margin-right: 25px;
}

#right{
  width: 300px;
  display: flex;
  justify-content: space-between;
}

#profile{
  width: 80px;
  cursor: pointer;
 
}


    #profile img{
    background-size: cover;
    object-fit: contain;
    background-position: center;
   
    height: 80px;
    width: 80px;
    }


  img{
    background-size: cover;
    object-fit: contain;
  
    height: 80px;
    width: 150px;
  }

  i {
    
    width:50px ;
    height:30%;
    cursor: pointer;
  }
}

.fa-bell {
  margin-top: 23px;
  margin-right: 25px;
  color: rgb(255, 255, 255);
  font-size: 30px;
  position: relative;
}
#notifiche {
  width: 14px;
  height: 14px;
  margin-left: 7px;
  background-color: red;
  border-radius: 12px;
  
  font-size: 10px;
  text-align: center;
 
  position: absolute;
  left: 18px;
  top: 18px;
}

#user {
  
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  
  img {
    width: 30px;
  }
#dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgb(43, 42, 51);
  color: white;
  border: 1px solid #b6b5b5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 5;
  cursor: pointer;
    div {
      padding: 1px 14px;
      &:hover {
        background-color: #5e5555;
      }
    }
  }
}
#links {
  list-style-type: none;
  padding: 0;
    li {
      display: inline;
    }
    a {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
}
}

</style>