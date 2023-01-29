import { createApp } from 'vue';
import '/@/style.css';
import App from './App.vue';
import router from './router';
import 'amfe-flexible';
import { setupStore } from '/@/store';
const app = createApp(App);
setupStore(app);
app.use(router).mount('#app');
