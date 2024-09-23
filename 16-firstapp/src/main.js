// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import LoadingComponent from '@/components/Utility/LoadingComponent.vue';
// import HeaderComponent from '@/components/Fixed/HeaderComponent.vue';

const app = createApp(App);
app.component('app-loading', LoadingComponent)
// app.component('HeaderComponent', HeaderComponent);

app.mount('#app');
