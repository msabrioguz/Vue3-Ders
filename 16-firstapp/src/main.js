// import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import LoadingComponent from '@/components/Utility/LoadingComponent.vue';
import ToastPlugin from 'vue-toast-notification';
// import HeaderComponent from '@/components/Fixed/HeaderComponent.vue';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App);
app.component('app-loading', LoadingComponent);
// app.component('HeaderComponent', HeaderComponent);
app.use(ToastPlugin);

app.mount('#app');
