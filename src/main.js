import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import UserDashboard from './components/UserDashboard.vue';
import RegisterPage from './components/RegisterPage.vue';



// Create the Vue app
const app = createApp(App);

// Set Axios defaults if needed
axios.defaults.baseURL = 'http://localhost:8000/api/'; // Set the base URL for your API requests

// Make Axios available globally
app.config.globalProperties.$axios = axios;
// Router setup
const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/dashboard', component: UserDashboard, meta: { requiresAuth: true } }
];

// Create Vue Router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Add router to the app
app.use(router);

// Axios Interceptor for adding JWT token to requests
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt'); // Retrieve token from localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Add token to request headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Router navigation guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('jwt');
    if (to.meta.requiresAuth && !token) {
        next('/login'); // Redirect to login if not authenticated
    } else {
        next();
    }
});

// Mount the app
// Mount the app
app.mount('#app');
