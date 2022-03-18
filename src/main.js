import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from "@/layouts/AppLayout/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap";
import VueRx from "@nopr3d/vue-next-rx";
import store from '@/store/ScheduleStore';

createApp(App)
    .use(router)
    .use(VueRx)
    .use(store)
    .component('AppLayout', AppLayout)
    .mount('#app')
