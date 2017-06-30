import Vue from 'vue'
import "babel-polyfill"

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)


import App from './App.vue'

var node = document.createElement("div");
node.id = "app"
document.body.appendChild(node);

import api from "./api";
Vue.use(api);

new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: (h) => h(App)
})