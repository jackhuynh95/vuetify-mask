import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

export default function install(app) {
  const vuetify = createVuetify({
    components,
    directives,
  });

  app.use(vuetify);
}