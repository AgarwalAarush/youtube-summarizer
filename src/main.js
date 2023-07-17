import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

createApp(App).use(router).mount("#app");

const node = document.getElementsByClassName("url-input-bar")
node.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        
    }
})