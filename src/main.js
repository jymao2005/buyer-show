import Vue from 'vue'
import "babel-polyfill"
import "./assests/css/reset.css"

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import api from "./api";

Vue.use(Element);
Vue.use(api);

import App from './App.vue'

var node = document.createElement("div");
node.id = "app"
document.body.appendChild(node);


new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: (h) => h(App)
})