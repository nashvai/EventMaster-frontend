import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "../components/LoginPage.vue";
import UserDashboard from "../components/UserDashboard.vue";
import HomePage from "../components/HomePage.vue";
import RegisterPage from "../components/RegisterPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/register",
        name: "register",
        component: RegisterPage,
    },
    {
        path: "/userDashboard",
        name: "userDashboard",
        component: UserDashboard,
        meta: { requiresAuth: true }, // Make this route accessible only for authenticated users
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("jwt");
    if (to.meta.requiresAuth && !token) {
        next("/login");
    } else {
        next();
    }
});

export default router;