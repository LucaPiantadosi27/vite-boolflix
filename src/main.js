import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

createApp(App).mount('#app')

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 16cf9fe0e8aeee3cfc3c7f142b6b1f36'
  }
};

  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
