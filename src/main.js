import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import  VueCookies  from "vue-cookies"


createApp(App).use(store).use(router).use(VueCookies).mount('#app')

