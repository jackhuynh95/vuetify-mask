import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import { vMaska } from "maska/vue"

export default function install(app) {
  const vuetify = createVuetify({
    components,
    directives,
  });

  // Register the v-maska directive
  app.directive('maska', vMaska);

  app.use(vuetify);
}