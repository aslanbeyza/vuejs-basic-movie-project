import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Hawaii from '../views/Hawaii.vue'
import Panama from '../views/Panama.vue'
import Jamaica from '../views/Jamaica.vue'



const routes = [
    {path:'/',name:'Home',component:Home},
    {path:'/about',name:'About',component:About},
    {path:'/movie/:id',name:'MovieDetail',component:MovieDetail},
    {path:'/hawaii',name:'Hawaii',component:Hawaii},
    {path:'/panama',name:'Panama',component:Panama},
    {path:'/Jamaica',name:'Jamaica',component:Jamaica}
]

// Router yapılandırması
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;