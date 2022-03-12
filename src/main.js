import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from "@/layouts/AppLayout/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App)
    .use(router)
    .component('AppLayout', AppLayout)
    .mount('#app')
