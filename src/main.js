import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

// createApp(App).use(router).mount('#app');

const app = createApp(App);

//安装插件
app.use(router);

app.mount('#app');
