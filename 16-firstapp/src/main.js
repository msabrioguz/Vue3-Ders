// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import HeaderComponent from '@/components/Fixed/HeaderComponent.vue';
import FooterComponent from '@/components/Fixed/FooterComponent.vue';

const app = createApp(App);
app.component('HeaderComponent', HeaderComponent);
app.component('FooterComponent', FooterComponent);

app.use()

app.mount('#app');
