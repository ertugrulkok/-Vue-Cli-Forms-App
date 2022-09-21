import { createApp } from "vue";
import App from "./App.vue";

import BewertungForm from "./components/BewertungForm.vue";

const app = createApp(App);
app.component("bewertung-form", BewertungForm);
app.mount("#app");
