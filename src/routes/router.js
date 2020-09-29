import {
    createWebHistory
} from "vue-router";
import {
    createRouter
} from "vue-router";

import Home from "/src/views/Home.vue";
import Login from "/src/views/Login.vue";
import Register from "/src/views/Register.vue";
import Profile from "/src/views/Profile.vue";
import Notification from "/src/views/Notification.vue";
import Settings from "/src/views/Settings.vue"

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/notification",
        name: "Notification",
        component: Notification
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;