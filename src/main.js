import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// Create the Vue app
const app = createApp(App);

// Set Axios defaults if needed
axios.defaults.baseURL = 'http://localhost:8000/api/'; // Set the base URL for your API requests

// Make Axios available globally
app.config.globalProperties.$axios = axios;

// Mount the app
app.mount('#app');
