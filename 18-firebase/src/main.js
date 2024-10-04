// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HeaderPart from './components/HeaderPart.vue';

const app = createApp(App);

app.component('HeaderPart', HeaderPart);
app.use(router);

app.mount('#app');
