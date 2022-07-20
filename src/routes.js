
import Signup from './components/Signup.vue';
import Home from './components/Home.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';
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
    {
        name:Add,
        path:'/add',
        component:Add
    },
    {
        name:Update,
        path:'/update/:id',
        component:Update
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes
    // routes:routes,
    // linkActiveClass:'active',
});
export default router