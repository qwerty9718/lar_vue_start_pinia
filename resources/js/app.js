import './bootstrap';

import {createApp} from "vue";
import App from '@/src/App.vue';
import router from "@/src/router/router.js";
import store from "@/src/store/index.js";
import i18n from "@/src/i18n/i18n.js";

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app');
