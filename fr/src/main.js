import { createApp } from 'vue'
import App from './App.vue'
import handle from "../src/common/promise";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/vue-fontawesome";
import router from "./router";
import "../vue.config";

createApp(App).mount('#app')
    .mixin({
        method: {
            handle
        }
    })
    .mount('#app');