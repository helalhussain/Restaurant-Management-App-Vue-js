
import Signup from './components/page/Signup.vue';
import Home from './components/page/Home.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name:Signup,
        path:'/',
        component:Signup
    },
    {
        name:Home,
        path:'/home',
        component:Home
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
    // routes:routes,
    // linkActiveClass:'active',
});
export default router