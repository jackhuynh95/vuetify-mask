import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import vuetifyMask from './components/index'; // Import the plugin

// Create the Vue app
const app = createApp(App);

// Use the Vuetify plugin
app.use(vuetify);

// Use the Vuetify Mask plugin
app.use(vuetifyMask);

// Mount the app to the DOM
app.mount('#app');