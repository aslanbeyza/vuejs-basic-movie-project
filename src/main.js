import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

// Router yapılandırması
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',name:'home',component:Home}

    ] // Burada rotalarınızı tanımlayabilirsiniz
});


// Vue uygulamasını oluşturma ve router'ı kullanma
createApp(App)
    .use(router) // .use(router) ifadesi burada olmalı
    .mount('#app'); // .mount('#app') son satır olmalı
