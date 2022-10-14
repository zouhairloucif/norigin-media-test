import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import SvgIcon from "vue3-icon";

import './assets/main.css'

const app = createApp(App)

app.component("svg-icon", SvgIcon);

app.use(router)
app.use(store)
app.use(BootstrapVue3)

app.mount('#app')
