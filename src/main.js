import { createApp, defineAsyncComponent } from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router';
import store from './store'
import App from './App';
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';

const BaseDialog = defineAsyncComponent(()=>import('./components/ui/BaseDialog'))

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app');
